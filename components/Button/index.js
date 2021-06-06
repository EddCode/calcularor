import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const calculatorAction = {
  clear: cb => cb(),
  setNumber: (cb, number) => cb(number),
  op: (cb, op) => cb(op),
  result: cb => cb(),
  deletion: cb => cb(),
  positiveNegative: cb => cb(),
};

const Button = ({text, color = '#2D2D2D', doubleWidth, onPress, action}) => {
  const handlePress = () => {
    calculatorAction[action](onPress, text);
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={handlePress}>
      <View
        style={[
          style.button,
          {backgroundColor: color},
        {width: doubleWidth ? 180 : 80}, // eslint-disable-line
        ]}>
        <Text
          style={[
            style.buttonContent,
          {color: color === '#9B9B9B' ? '#000' : '#FFF'}, // eslint-disable-line
          ]}>
          {' '}
          {text}{' '}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
    marginHorizontal: 10,
    borderRadius: 100,
    backgroundColor: 'gray',
    justifyContent: 'center',
  },
  buttonContent: {
    fontSize: 20,
    fontWeight: '300',
    color: '#FFF',
    textAlign: 'center',
  },
});

export default Button;
