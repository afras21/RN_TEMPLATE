import { LineSeperator, RadioBox } from '@/components';
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type Props = {
    title?: string;
    userTypes: Array<any>;
    selectedId: string
    onChange: (index: number) => void;
};

const UserType = ({
    title = 'User Types',
    userTypes = [],
    onChange,
    selectedId
}: Props) => {

    if (!userTypes?.length) return null

    return (
        <View style={styles.root}>
            <Text style={styles.titleStyle}>{title}</Text>
            <RadioBox onChange={onChange} values={userTypes} selectedId={selectedId} />
            <LineSeperator />
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


export default UserType