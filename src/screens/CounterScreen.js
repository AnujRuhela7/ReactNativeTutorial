import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Counter = () => {
  const [ counter, setCounter ] = useState(0);
  return (
    <View>
      <Text style={ styles.text }>Counter Application</Text>
      <Button
        style={ styles.buttonSize }
        onPress={ () => {
          setCounter(counter + 1);
        } }
        title="Increase"
      />
      <Button
        style={ styles.buttonSize }
        onPress={ () => {
          setCounter(counter - 1);
        } }
        title="Decrease"
      />
      <Text>
        Current Count : { counter }
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30, marginVertical: 15
  },
  buttonSize: {
    fontSize: 15, marginVertical: 15
  },
});

export default Counter;