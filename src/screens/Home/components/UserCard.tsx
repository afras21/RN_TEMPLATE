import React from 'react'
import { Avatar } from '@/components';
import { View, Text, StyleSheet } from 'react-native'


const testIdCons = {
    WRAPPER: 'usercard-wrapper',
    TEXT_WRAPPER: 'usercard-text-wrapper',
    NAME: 'usercard-name',
    ROLE: 'usercard-role',
}

/**
 * @todo change item type
 */
type Props = {
    item: any
    index: number
};

const UserCard = ({
    item,
    index
}: Props) => {
    const { name, role } = item ?? {};
    return (
        <View
            testID={testIdCons.WRAPPER}
            key={`__user_card__${index}__`}
            style={styles.root}>
            <Avatar title={String(name).charAt(0)} />
            <View testID={testIdCons.TEXT_WRAPPER} style={styles.textWrapper}>
                <Text testID={testIdCons.NAME} numberOfLines={1} style={styles.nameStyle}>{name}</Text>
                <Text testID={testIdCons.ROLE} numberOfLines={1} style={styles.roleStyle}>{role}</Text>
            </View>
        </View>
    )
};

export default UserCard;
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