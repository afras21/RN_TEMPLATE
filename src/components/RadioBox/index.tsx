import { type } from 'os';
import React, { useMemo, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

type Props = {
    values: Array<any>
    selectedId: string
    onChange: (index: number) => void
}

const RadioBox = ({ selectedId, onChange, values }: Props) => {

    const radioButtons = useMemo(() => (values), [values]);

    if (!values?.length) return null;

    return (
        <RadioGroup
            containerStyle={styles.radioGroupStyle}
            radioButtons={radioButtons}
            onPress={onChange}
            selectedId={selectedId}
        />
    );

};

const styles = StyleSheet.create({
    radioGroupStyle: {
        paddingVertical: 20,
        alignItems: 'flex-start'
    }
})
export default RadioBox;
