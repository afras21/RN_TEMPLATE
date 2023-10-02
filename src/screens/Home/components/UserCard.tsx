import React from 'react'
import { Avatar } from '@/components';
import { View, Text, StyleSheet } from 'react-native'

/**
 * @todo change item type
 */
type Props = {
    item: any
    index: number
};

const UserList = ({
    item,
    index
}: Props) => {
    const { name, role } = item ?? {};
    return (
        <View
            key={`__user_card__${index}__`}
            style={styles.root}>
            <Avatar title={String(name).charAt(0)} />
            <View style={styles.textWrapper}>
                <Text numberOfLines={1} style={styles.nameStyle}>{name}</Text>
                <Text numberOfLines={1} style={styles.roleStyle}>{role}</Text>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        paddingVertical: 10,
        marginVertical: 5
    },
    textWrapper: {
        marginHorizontal: 15,
        justifyContent: 'center',
        width: '70%'
    },
    nameStyle: {
        fontSize: 18
    },
    roleStyle: {
        fontSize: 15,
        color: '#7d7e80',
        lineHeight: 25
    }
})
export default UserList