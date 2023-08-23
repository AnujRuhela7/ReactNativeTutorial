import React from "react";
import { Text, View, StyleSheet, Button } from 'react-native';

const ColourDetail = (props) => {
  return (
    <View>
      <Text style={ styles.text }>{ props.colour }</Text>
      <Button
        style={ styles.button }
        title={ `More ${ props.colour }` }
        onPress={ () => props.onIncrease() }
      />
      <Button
        style={ styles.button }
        title={ `Less ${ props.colour }` }
        onPress={ () => props.onDecrease() }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    marginVertical: 10
  },
  button: {
    marginVertical: 10
  }
});

export default ColourDetail;