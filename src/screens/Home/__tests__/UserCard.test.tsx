import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import { UserCard } from '../components';
import { userCard } from './__mocks__';

const testIdCons = {
    WRAPPER: 'usercard-wrapper',
    TEXT_WRAPPER: 'usercard-text-wrapper',
    NAME: 'usercard-name',
    ROLE: 'usercard-role',
}

test('User Card should render correctly', () => {
    const component = (
        <Provider store={store}>
            <UserCard item={userCard} index={0}/>
        </Provider>
    );

    render(component);

    const wrapper = screen.getByTestId(testIdCons.WRAPPER);
    const textWrapper = screen.getByTestId(testIdCons.TEXT_WRAPPER);
    const name = screen.getByTestId(testIdCons.NAME);
    const role = screen.getByTestId(testIdCons.ROLE);

    expect(wrapper.props.style.flexDirection).toBe('row');

    expect(textWrapper.props.style.width).toBe('70%');
    expect(textWrapper.props.style.justifyContent).toBe('center');
    expect(textWrapper.props.style.marginHorizontal).toBe(15);

    expect(name.props.children).toBeDefined();
    expect(role.props.children).toBeDefined();

    


});
