//this is a counter
import React, { useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';
import {CounterView} from './CounterView';

const centered: ViewStyle = {
    justifyContent: 'center',
    alignItems: 'center',
};

// const SIZE = 100;
const SIZE = Platform.select({ web: 200, default: 100 });
const FONT_SIZE = SIZE / 2;

const styles = StyleSheet.create({
    container: {
        ...centered,
        flex: 1,
        flexDirection: 'row',
        // backgroundColor: '#ee7767',
        backgroundColor: Platform.select({ web: 'black', default: '#ee7767' }),
    },
    counter: {
        ...centered,
        height: SIZE,
        width: SIZE,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    numberText: {
        color: '#ee7767',
        fontWeight: 'bold',
        fontSize: FONT_SIZE,
    },
    buttonText: {
        color: 'white',
        fontSize: FONT_SIZE,
    },
    button: {
        ...centered,
        height: SIZE,
        width: SIZE,
    },
});

export const CounterContainer = () => {
    const [count, setCount] = useState(0);

    const incrementNum = () => {
        setCount(count + 1);
    };

    const decrementNum = () => {
        setCount(count - 1);
    };
    return (<CounterView
        count={count}
        increment={incrementNum}
        decrement={decrementNum}
    />);
};
