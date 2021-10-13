import React from 'react';
import {Pressable, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {Button} from 'react-native-paper';

const centered: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center'
};

const SIZE = 100;
// const SIZE = Platform.select({ web: 200, default: 100 });
const FONT_SIZE = SIZE / 2;

const styles = StyleSheet.create({
  container: {
    ...centered,
    flex: 1,
    flexDirection: 'column',
    marginTop: 50
  },
  counterContainer: {
    width: '100%',
    ...centered,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ee7767'
    // backgroundColor: Platform.select({ web: 'black', default: '#ee7767' }),
  },
  materialUIButtonContainer: {
    ...centered,
    margin: 10
  },
  counter: {
    ...centered,
    height: SIZE,
    width: SIZE,
    borderRadius: 5,
    backgroundColor: 'white'
  },
  numberText: {
    color: '#ee7767',
    fontWeight: 'bold',
    fontSize: FONT_SIZE
  },
  buttonText: {
    color: 'white',
    fontSize: FONT_SIZE
  },
  button: {
    ...centered,
    height: SIZE,
    width: SIZE
  }
});

export const CounterView = ({count, increment, decrement}: { count: number, increment: any, decrement: any }) => {

  return (
    <View style={styles.container}>
      <View style={styles.materialUIButtonContainer}>
        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
          Press me
        </Button>
      </View>
      <View style={styles.counterContainer}>
        <Pressable style={styles.button} onPress={decrement}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <View style={styles.counter}>
          <Text style={styles.numberText}>{count}</Text>
        </View>
        <Pressable style={styles.button} onPress={increment}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};
