import { LineSeperator } from '@/components';
import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { UserCard } from '.';


const testIdCons = {
    WRAPPER: 'userlist-wrapper',
    TITLE: 'userlist-usertypes',
    LIST: 'userlist-list',
    NO_RECORDS: 'userlist-no-records'
}

type Props = {
    title?: string;
    userList?: object;
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
        <View testID={testIdCons.WRAPPER} style={styles.root}>
            <Text testID={testIdCons.TITLE} style={styles.titleStyle}>{`${title} Users`}</Text>
            <FlatList
                testID={testIdCons.LIST}
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
    <Text testID={testIdCons.NO_RECORDS} style={styles.noRecordStyle}>{'No Records found'}</Text>
)
const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 15
    },
    titleStyle: {
        fontWeight: '500',
        fontSize: 20
    },
    noRecordStyle: {
        textAlign: 'center',
        padding: 50,
        color: '#c2c2c2'
    }
})
export default UserList