import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ColourScreen = () => {
  const [ colour, setColour ] = useState([]);
  return (
    <View>
      <Text>Colours</Text>
      <Button
        title='Add Colour Tile'
        onPress={ () => {
          setColour([ ...colour, randomColour() ]);
        } }
      />

      <FlatList
        keyExtractor={ (item) => item }
        data={ colour }
        renderItem={ ({ item }) => {
          return <View style={ { height: 100, width: 100, backgroundColor: item } }></View>;
        } }
      />
    </View>
  );
};

const randomColour = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${ red }, ${ green }, ${ blue })`;
};


const styles = StyleSheet.create({
  text: {
    fontSize: 25
  }
});

export default ColourScreen;