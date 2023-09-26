import React, { useEffect } from 'react';
import {
    View,
    ActivityIndicator,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Brand, Header } from '../../components';
import { useTheme } from '../../hooks';
import { changeTheme, ThemeState } from '../../store/theme';
import i18next from 'i18next';

const Home = () => {
    const {
        Common,
        Fonts,
        Gutters,
        Layout,
        Images,
        darkMode: isDark,
    } = useTheme();
    const dispatch = useDispatch();

    const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
        dispatch(changeTheme({ theme, darkMode }));
    };

    return (
        <Header title='Dashboard' />
    );
};

export default Home;
