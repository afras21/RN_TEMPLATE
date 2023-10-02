import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type Props = {
    title?: string;
};

const avatarConstraints = {
    DEFAULT_TEXT: 'U',
    MAX_NO_CHARS: 2
}

const testIdCons = {
    ROOT: 'avatar-wrapper',
    TEXT: 'avatar-text'
}

const Avatar = ({
    title = avatarConstraints.DEFAULT_TEXT
}: Props) => {

    if (title?.length > avatarConstraints.MAX_NO_CHARS) return null;

    return (
        <View testID={testIdCons.ROOT} style={styles.root}>
            <Text testID={testIdCons.TEXT} style={styles.titleStyle}>{title}</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    root: {
        backgroundColor: '#dce6f5',
        padding: 15,
        paddingHorizontal: 20,
        borderRadius: 5
    },
    titleStyle: {
        fontWeight: '500',
        fontSize: 15,
        color: '#274e8c'
    }
})
export default Avatar