import React from 'react';
import { View, DimensionValue, Text, StyleSheet } from 'react-native';

type Props = {
    title: string
};

const Header = ({ title }: Props) => {

    return (
        <View testID={''} style={styles.root}>
            <Text style={styles.titleStyle}>{title}</Text>
        </View>
    );
};

Header.defaultProps = {
    title: 'Home',
};

const styles = StyleSheet.create({
    root: {
        padding: 15,
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 28
    }
})

export default Header;
