import { Avatar, LineSeperator } from '@/components';
import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

type Props = {
    title?: string;
    userList: object;
    onChange: () => void;
};

/**
 * @todo add sceleton loader
 * @param param0 
 * @returns 
 */

const UserList = ({
    title = 'Users',
    userList = [],
    onChange
}: Props) => {

    const renderItem = ({ item, index }: { item: any, index: number }) => (
        <View
            key={`__user_card__${index}__`}
            style={{ flexDirection: 'row', paddingVertical: 10, marginVertical: 5 }}>
            <Avatar title='T' />
            <View style={{ marginHorizontal: 15, justifyContent: 'center', width: '70%' }}>
                <Text numberOfLines={1} style={{ fontSize: 18 }}>{item?.name}</Text>
                <Text numberOfLines={1} style={{ fontSize: 15, color: '#7d7e80', lineHeight: 25 }}>{item?.role}</Text>
            </View>
        </View>
    )


    return (
        <View style={styles.root}>
            <Text style={styles.titleStyle}>{`${title} Users`}</Text>
            <FlatList
                data={userList}
                keyExtractor={(item, index) => `__${item.id}_userListing_${index}__`}
                renderItem={renderItem}
                ListEmptyComponent={<NoRecordsFound />}
            />

            <LineSeperator />
        </View>
    )
};

const NoRecordsFound = ({ }) => (
    <Text style={{ textAlign: 'center', padding: 50, color: '#c2c2c2' }}>{'No Records found'}</Text>
)
const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 15
    },
    titleStyle: {
        fontWeight: '500',
        fontSize: 20
    }
})
export default UserList