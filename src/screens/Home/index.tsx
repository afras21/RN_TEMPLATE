import React, { useEffect, useMemo, useState } from 'react';
import {
    View,
    ActivityIndicator,
    StyleSheet,
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

const Home = () => {
    const [selectedUserType, setSelectedUserType] = useState<UserTypes>({});
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
    console.log('---QUER DATA--', data?.listZellerCustomers.items);
    const usersData = useMemo(() => {
        return data?.listZellerCustomers?.items
    }, [data])

    useEffect(() => {
        setSelectedUserType(userTypes.items[0]);
        // setUsersData(listZellerCustomers.items);


    }, []);

    const onSelectUserType = (index: number) => {
        setSelectedUserType(userTypes.items[index - 1])
        getFilteredData();
    };

    const onSearchTextChange = (text: string) => {
        setSearchKey(text?.toLocaleLowerCase() ?? '');
    }

    const getFilteredData = () => {
        var filteredPayload: Array<User> | [] = [];
        if (usersData?.length > 0) {
            filteredPayload = usersData.filter(user => user.role == selectedUserType.name);

            if (filteredPayload?.length > 0 && searchKey?.length > 0) {
                return filteredPayload.filter(user => user?.name?.toLocaleLowerCase().includes(searchKey) || user?.email.includes(searchKey))
            }
        }
        return filteredPayload
    }

    if (loading) {
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
            />
        </View>

    );
};

export default Home;
