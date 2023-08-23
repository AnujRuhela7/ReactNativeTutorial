import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import ColourDetail from "../components/ColourDetail";

const COLOR_INCREMENT = 15;


const SquareColour = () => {
  const [ red, setRed ] = useState(0);
  const [ green, setGreen ] = useState(0);
  const [ blue, setBlue ] = useState(0);

  const setColour = (colour, change) => {

    switch (colour) {
      case 'red': {
        (red + change < 0 || red + change > 255) ? null : setRed(red + change);
        return;
      }
      case 'green': {
        (green + change < 0 || green + change > 255) ? null : setGreen(green + change);
        return;
      }
      case 'blue': {
        (blue + change < 0 || blue + change > 255) ? null : setBlue(blue + change);
        return;
      }
      default:
        {
          return;
        }
    }
  };

  return (
    <View>
      <Text style={ { fontSize: 40 } }>Custom Colour Tile</Text>
      <ColourDetail
        colour="red"
        onIncrease={ () => { setColour('red', COLOR_INCREMENT); } }
        onDecrease={ () => { setColour('red', -1 * COLOR_INCREMENT); } }
      />
      <ColourDetail
        colour="green"
        onIncrease={ () => { setColour('green', COLOR_INCREMENT); } }
        onDecrease={ () => { setColour('green', -1 * COLOR_INCREMENT); } }
      />
      <ColourDetail
        colour="blue"
        onIncrease={ () => { setColour('blue', COLOR_INCREMENT); } }
        onDecrease={ () => { setColour('blue', -1 * COLOR_INCREMENT); } }
      />
      <View style={ { height: 150, width: 150, backgroundColor: `rgb(${ red }, ${ green }, ${ blue })` } } />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareColour;;