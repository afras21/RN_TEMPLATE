import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Avatar from '../index';
import { Provider } from 'react-redux';
import { store } from '../../../store';

const testIdCons = {
    ROOT: 'avatar-wrapper',
    TEXT: 'avatar-text'
}

test('avatar should render correctly', () => {
    const component = (
        <Provider store={store}>
            <Avatar />
        </Provider>
    );

    render(component);

    const wrapper = screen.getByTestId(testIdCons.ROOT);
    const avatarText = screen.getByTestId(testIdCons.TEXT);

    expect(wrapper.props.style.paddingHorizontal).toBe(20);
    expect(wrapper.props.style.padding).toBe(15);
    expect(wrapper.props.style.borderRadius).toBe(5);

    expect(avatarText.props.style.fontSize).toBe(15);
    expect(avatarText.props.style.fontWeight).toBe("500");
    expect(avatarText.props.children?.length).toBeLessThanOrEqual(2)
});
