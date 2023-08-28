import React, { useReducer } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import ColourDetail from "../components/ColourDetail";

const COLOR_INCREMENT = 15;

// state - It takes the initial object of values, that we want to change/modify.
// action - It literally means that how we want to change our state object, by convention we name it action

// If we want to follow the community convention of writing the variables, then we will have to change some of our code here,
//  colourToChange -> type
// type: "change_red"
// amount -> payload
// The changing state variable shoul be defined in by "type" as a key, and the value should be "change_variable"
// And the amount by which we need to change the state varaible that should be specified by "payload"
// There is no compulsion to use these community convention, just in case you do not wish to go by the book. ;-)
const reducer = (state, action) => {
  // state  === { red: number, green: number, blue: number}
  // action === { colourToChange : 'red' || 'green' || 'blue', amount: 15 || -15}

  switch (action.colourToChange) {
    case 'red': {
      return state.red + action.amount > 255 || state.red + action.amount < 0 ? state : { ...state, red: state.red + action.amount };
    }
    // never going to do domething like this : state.red = state.red (+ || -) 15
    // anytime we want to change the object, we will rebuild the whole object from the scratch, hence not directly modifying the object, but instead assigning a new object with modified values

    // What we are doing in this statement is that, we are copy pasting the values of the existing object and creating a new object, and then modifying the new object

    case 'green': {
      return state.green + action.amount < 0 || state.green + action.amount > 255 ? state : { ...state, green: state.green + action.amount };
    }
    case 'blue': {
      return state.blue + action.amount < 0 || state.red + action.amount > 255 ? state : { ...state, blue: state.blue + action.amount };
    }
    default:
      return state;
  }
};

const SquareColour = () => {
  // const [ red, setRed ] = useState(0);
  // const [ green, setGreen ] = useState(0);
  // const [ blue, setBlue ] = useState(0);

  // const setColour = (colour, change) => {
  //
  //   switch (colour) {
  //     case 'red': {
  //       (red + change < 0 || red + change > 255) ? null : setRed(red + change);
  //       return;
  //     }
  //     case 'green': {
  //       (green + change < 0 || green + change > 255) ? null : setGreen(green + change);
  //       return;
  //     }
  //     case 'blue': {
  //       (blue + change < 0 || blue + change > 255) ? null : setBlue(blue + change);
  //       return;
  //     }
  //     default:
  //       {
  //         return;
  //       }
  //   }
  // };

  const [ state, dispatch ] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  // dispatch - runMyReducer
  return (
    <View>
      <Text style={ { fontSize: 40 } }>Custom Colour Tile</Text>
      <ColourDetail
        colour="red"
        onIncrease={ () => { dispatch({ colourToChange: "red", amount: COLOR_INCREMENT }); } }
        onDecrease={ () => { dispatch({ colourToChange: "red", amount: -1 * COLOR_INCREMENT }); } }
      />
      <ColourDetail
        colour="green"
        onIncrease={ () => { dispatch({ colourToChange: "green", amount: COLOR_INCREMENT }); } }
        onDecrease={ () => { dispatch({ colourToChange: "green", amount: -1 * COLOR_INCREMENT }); } }
      />
      <ColourDetail
        colour="blue"
        onIncrease={ () => { dispatch({ colourToChange: "blue", amount: COLOR_INCREMENT }); } }
        onDecrease={ () => { dispatch({ colourToChange: "blue", amount: -1 * COLOR_INCREMENT }); } }
      />
      <View style={ { height: 150, width: 150, backgroundColor: `rgb(${ red }, ${ green }, ${ blue })` } } />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareColour;