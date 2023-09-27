import React, { useEffect, useState } from 'react';
import {
    View,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';
import { Header } from '../../components';
import { UserList, UserType } from './components';
import SearchBar from '@/components/SearchBar';

export const listZellerCustomers = {
    items: [
        {
            id: '1',
            name: 'TestCustomer1',
            email: 'test1@test.com',
            role: 'Manager'
        },
        {
            id: '2',
            name: 'TestCustomer2',
            email: 'test2@test.com',
            role: 'Admin'
        },
        {
            id: '3',
            name: 'TestCustomer3',
            email: 'test3@test.com',
            role: 'Manager'
        },
        {
            id: '4',
            name: 'TestCustomer4',
            email: 'test4@test.com',
            role: 'Admin'
        }
    ],
    nextToken: null
};

export const userTypes = {
    items: [
        {
            id: '1',
            name: 'Admin',
            label: 'Admin'
        },
        {
            id: '2',
            name: 'Manager',
            label: 'Manager'
        }
    ]
}

type UserTypes = {
    id: string,
    name: string,
    label: string
}
type User = {
    id: string,
    name: string,
    email: string,
    role: string
}

const Home = () => {
    const [selectedUserType, setSelectedUserType] = useState<UserTypes>({});
    const [usersData, setUsersData] = useState<Array<User>>([]);
    const [isLoading, setLoading] = useState<boolean>(true);
    const [searchKey, setSearchKey] = useState<string>('');

    useEffect(() => {
        setSelectedUserType(userTypes.items[0]);
        setUsersData(listZellerCustomers.items);
        setLoading(false);
    }, [])

    const onSelectUserType = (index: number) => {
        console.log('-----SELECT USER TYPE------', index)
        setSelectedUserType(userTypes.items[index - 1])
        getFilteredData();
    };

    const onSearchTextChange = (text: string) => {
        setSearchKey(text?.toLocaleLowerCase() ?? '');
    }

    const getFilteredData = () => {
        var filteredPayload: Array<User> | [] = [];
        console.log('\n\n\n---UPDATINT-------',usersData)
        if (usersData?.length > 0) {
            filteredPayload =  usersData.filter(user => user.role == selectedUserType.name);
            
            if (filteredPayload?.length > 0 && searchKey?.length > 0) {
                return filteredPayload.filter(user => user?.name?.toLocaleLowerCase().includes(searchKey) || user?.email.includes(searchKey))
            }
        }
        return filteredPayload
    }

    if (isLoading) {
        return <ActivityIndicator />
    }

    return (
        <View>
            <Header title='Dashboard' />
            <SearchBar onChange={onSearchTextChange} />
            <UserType
                onChange={onSelectUserType}
                userTypes={userTypes.items}
                selectedId={selectedUserType.id}
            />
            <UserList
                title={selectedUserType?.label} // filter based on applied filter
                userList={getFilteredData()}
                onChange={() => { }}
            />
        </View>

    );
};

export default Home;
