import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Text style={ styles.text }>My First App </Text>
      <Button
        style={ styles.buttonSize }
        onPress={ () => navigation.navigate("Components") }
        title="Go To Components Demo"
      />
      <Button
        style={ styles.buttonSize }
        onPress={ () => navigation.navigate("List") }
        title="Go To List Demo"
      />
      <Button
        style={ styles.buttonSize }
        onPress={ () => navigation.navigate("Images") }
        title="Go To Images" />
      <Button
        style={ styles.buttonSize }
        onPress={ () => navigation.navigate("Counter") }
        title="Counter Application"
      />
      <Button
        style={ styles.buttonSize }
        onPress={ () => navigation.navigate("Colours") }
        title="Coloured Tiles Demo"
      />
      <Button
        style={ styles.buttonSize }
        onPress={ () => navigation.navigate("SquareColourTile") }
        title="Custom Colour Tile Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30, marginVertical: 15
  },
  buttonSize: {
    fontSize: 15, marginVertical: 15
  }
});

export default HomeScreen;