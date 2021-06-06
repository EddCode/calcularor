import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {styles} from '../assets/globalStyles';
import Button from '../components/Button';
import useActions from '../hooks/useActions';

const op = {
  '+': (prev, current) => prev + current,
  '-': (prev, current) => prev - current,
  x: (prev, current) =>
    prev === 0 && current === 0 ? 'ERROR' : prev * current,
  '/': (prev, current) => prev / current,
};

const Calculator = () => {
  const {
    getResult,
    handleDelition,
    clearResult,
    setPositiveNegative,
    makeOperation,
    addNumber,
    prev,
    number
  } = useActions({op});

  return (
    <View style={[styles.darkBackground, localStyle.container]}>
      <Text style={localStyle.subresult} numberOfLines={1} adjustsFontSizeToFit>
        {prev === '0' ? '' : prev}
      </Text>
      <Text
        style={[localStyle.result, number === 'ERROR' && localStyle.error]}
        numberOfLines={1}
        adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={localStyle.buttonsContainer}>
        <Button text="C" color="#9B9B9B" onPress={clearResult} action="clear" />
        <Button
          text="+/-"
          color="#9B9B9B"
          onPress={setPositiveNegative}
          action="positiveNegative"
        />
        <Button
          text="Del"
          color="#9B9B9B"
          onPress={handleDelition}
          action="deletion"
        />
        <Button text="/" color="#FF9427" onPress={makeOperation} action="op" />
      </View>

      <View style={localStyle.buttonsContainer}>
        <Button text="7" onPress={addNumber} action="setNumber" />
        <Button text="8" onPress={addNumber} action="setNumber" />
        <Button text="9" onPress={addNumber} action="setNumber" />
        <Button text="x" color="#FF9427" onPress={makeOperation} action="op" />
      </View>

      <View style={localStyle.buttonsContainer}>
        <Button text="4" onPress={addNumber} action="setNumber" />
        <Button text="5" onPress={addNumber} action="setNumber" />
        <Button text="6" onPress={addNumber} action="setNumber" />
        <Button text="-" color="#FF9427" onPress={makeOperation} action="op" />
      </View>

      <View style={localStyle.buttonsContainer}>
        <Button text="1" onPress={addNumber} action="setNumber" />
        <Button text="2" onPress={addNumber} action="setNumber" />
        <Button text="3" onPress={addNumber} action="setNumber" />
        <Button text="+" color="#FF9427" onPress={makeOperation} action="op" />
      </View>

      <View style={localStyle.buttonsContainer}>
        <Button text="0" doubleWidth onPress={addNumber} action="setNumber" />
        <Button text="." onPress={addNumber} action="setNumber" />
        <Button text="=" color="#FF9427" onPress={getResult} action="result" />
      </View>
    </View>
  );
};

const localStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
  },
  result: {
    color: '#FFF',
    fontSize: 60,
    marginVertical: 10,
    marginBottom: 15,
  },
  error: {
    color: 'red',
  },
  subresult: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 30,
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 18,
  },
});

export default Calculator;
