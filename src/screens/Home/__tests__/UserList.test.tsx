import React from 'react';
import { render, screen, waitFor } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import { UserList } from '../components';
import { listZellerCustomers } from '..';

const testIdCons = {
    WRAPPER: 'userlist-wrapper',
    TITLE: 'userlist-usertypes',
    LIST: 'userlist-list',
    NO_RECORDS: 'userlist-no-records'
}

test('User Lists should render correctly', () => {
    const component = (
        <Provider store={store}>
            <UserList />
        </Provider>
    );

    render(component);

    const wrapper = screen.getByTestId(testIdCons.WRAPPER);
    const title = screen.getByTestId(testIdCons.TITLE);
    const userList = screen.getByTestId(testIdCons.LIST);
    const noRecords = screen.getByTestId(testIdCons.NO_RECORDS);

    expect(wrapper.props.style.paddingHorizontal).toBe(15);
    expect(title.props.children).toBeDefined();
    expect(userList.props.children).toBeDefined();
    expect(noRecords.props.children).toBeDefined();
});

test('Should Render no records for empty list', async () => {
    const component = (
        <Provider store={store}>
            <UserList userList={[]} />
        </Provider>
    );

    render(component);

    const noRecords = screen.getByTestId(testIdCons.NO_RECORDS);
    await waitFor(() => {
        return noRecords;
    });
    expect(noRecords);
});
