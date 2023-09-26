import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type Props = {
    title?: string;
};

const Avatar = ({
    title = 'Users'
}: Props) => {


    return (
        <View style={{ backgroundColor: '#dce6f5', padding: 15, paddingHorizontal: 20, borderRadius: 5 }}>
            <Text numberOfLines={1} style={{ fontWeight: '500', fontSize: 15, color: '#274e8c' }}>{title}</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 15
    },
    titleStyle: {
        fontWeight: '500',
        fontSize: 20
    }
})
export default Avatar