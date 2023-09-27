import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

type Props = {
    placeHolder: string;
    onChange: () => {};
}


const SearchBar = ({
    placeHolder = 'Search',
    onChange
}: Props) => {


    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeHolder}
                style={styles.formField}
                placeholderTextColor={'#888888'}
                onChangeText={onChange}
            />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        paddingHorizontal: 10
    },
    formField: {
        borderWidth: 0.5,
        padding: 10,
        paddingLeft: 20,
        borderRadius: 10,
        borderColor: '#c2c2c2',
        fontSize: 15,
        height: 40
    }
})

export default SearchBar;