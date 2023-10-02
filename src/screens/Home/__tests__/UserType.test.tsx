import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import { UserType } from '../components';
import { userType } from './__mocks__/';

const testIdCons = {
    WRAPPER: 'userType-wrapper',
    TITLE: 'userType-title',
}

test('User type should render correctly', () => {
    const component = (
        <Provider store={store}>
            <UserType
                userTypes={userType?.items}
                onChange={() => { }}
                selectedId={userType?.items[0]?.id}
            />
        </Provider>
    );

    render(component);

    const wrapper = screen.getByTestId(testIdCons.WRAPPER);
    const title = screen.getByTestId(testIdCons.TITLE);

    expect(wrapper.props.style.paddingHorizontal).toBe(15);
    expect(title.props.children).toBeDefined();
});
