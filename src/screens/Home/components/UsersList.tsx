import { Avatar, LineSeperator } from '@/components';
import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { UserCard } from '.';

type Props = {
    title?: string;
    userList: object;
};

/**
 * @todo add sceleton loader
 * @param param0 
 * @returns 
 */

const UserList = ({
    title = 'Users',
    userList = []
}: Props) => {


    return (
        <View style={styles.root}>
            <Text style={styles.titleStyle}>{`${title} Users`}</Text>
            <FlatList
                data={userList}
                keyExtractor={(item, index) => `__${item.id}_userListing_${index}__`}
                renderItem={UserCard}
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