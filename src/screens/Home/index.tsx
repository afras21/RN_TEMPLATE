import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
    View,
    ActivityIndicator,
    StyleSheet,
    SafeAreaView,
    Alert,
} from 'react-native';
import { Header } from '../../components';
import { UserList, UserType } from './components';
import SearchBar from '@/components/SearchBar';
import { gql, useQuery } from "@apollo/client";

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

const INITIAL_USER_TYPE = {
    id: '', name: '', label: ''
}


const Home = () => {
    const [selectedUserType, setSelectedUserType] = useState<UserTypes>(INITIAL_USER_TYPE);
    const [searchKey, setSearchKey] = useState<string>('');

    const fetchUsersQuery = gql(`query ExampleQuery($getZellerCustomerId: String!) {
        getZellerCustomer(id: $getZellerCustomerId) {
          id, name, role
        }
        listZellerCustomers {
          items {
            id, name, role, email
          }
        }
      }`)
    const { loading, error, data } = useQuery(fetchUsersQuery, { variables: { "getZellerCustomerId": "1" } });

    if (error) {
    }

    const usersData = useMemo(() => {
        const { items = [] } = data?.listZellerCustomers ?? {};
        return items;
    }, [data])

    useEffect(() => {
        setSelectedUserType(userTypes.items[0]);
    }, []);

    const onSelectUserType = (type: UserTypes) => {
        setSelectedUserType(type)
        getFilteredData(usersData, selectedUserType, searchKey);
    };
    const onSearchTextChange = useCallback((text: string) => {
        setSearchKey(text?.toLocaleLowerCase() ?? '');
    }, []);



    if (loading) {
        return <ActivityIndicator/>
    }

    return (
        <SafeAreaView>
            <Header title='Dashboard' />
            <SearchBar onChange={onSearchTextChange} />
            <UserType
                onChange={onSelectUserType}
                userTypes={userTypes.items}
                selectedId={selectedUserType?.id}
            />
            <UserList
                title={selectedUserType?.label} // filter based on applied filter
                userList={getFilteredData(usersData, selectedUserType, searchKey)}
            />
        </SafeAreaView>
    );
};

const getFilteredData = (usersData: Array<User>, selectedUserType: UserTypes, searchKey: string) => {
    var filteredPayload: Array<User> | [] = [];
    if (usersData?.length > 0) {
        filteredPayload = usersData.filter((user: User) => user.role == selectedUserType.name);

        if (filteredPayload?.length > 0 && searchKey?.length > 0) {
            return filteredPayload.filter((user: User) => user?.name?.toLocaleLowerCase().includes(searchKey) || user?.email.includes(searchKey))
        }
    }
    return filteredPayload
}

export default Home;
