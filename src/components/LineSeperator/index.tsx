import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type Props = {
};

const LineSeperator = ({
}: Props) => {


    return (
        <View
            style={styles.root}
        />
    )
};
const styles = StyleSheet.create({
    root: {

        borderBottomColor: '#c2c2c2',
        margin: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
})
export default LineSeperator;