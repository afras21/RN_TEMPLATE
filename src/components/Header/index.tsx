import React from 'react';
import { View, DimensionValue, Text, StyleSheet } from 'react-native';

type Props = {
    height?: DimensionValue;
    width?: DimensionValue;
    title: string
};

const Header = ({ height, width, title }: Props) => {

    return (
        <View testID={''} style={[styles.root, { height, width }]}>
            <Text style={styles.titleStyle}>{title}</Text>
        </View>
    );
};

Header.defaultProps = {
    height: 200,
    width: 200,
    mode: 'contain',
};

const styles = StyleSheet.create({
    root: {
        padding: 15
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 28
    }
})

export default Header;
