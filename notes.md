# Introduction
- From 'react' library we import React, which helps to identify different components in our project and make them work together
- We import Text, Stylesheet from 'react-native' library, here react-native library helps in extracting out the info from components and helps to show content on the mobile screen.

# import React from 'react';
# import { Text, Stylesheet } from 'react-native';
- The difference between these two lines is that in the first line we are importing the whole react library, while in the second line, we are importing some part of the 'react-native' library, hence using curly braces here.

## App.js
- In this file, we have a navigator Object,
- in this the createStackNavigator Object, we have various information like what should be the Home Screen, the other various components, what is the initialRouteName, i.e. the first component to be shown when we open the App, the title of the app

## StyleSheet.create()
- This function is used to create an object of styles that can be applied in the components.
- It is not necessary to use it, as we can also apply inline style, but using this method provides instant validation of style.
- We get immediate response of it if we encounter an error.
- While if we apply inline style, we do get the same error message as a warning.

## Ways to return multi-line JSX
- You can write in multiple ways:
- return (
  - <View>
    - <Text>Hi There</Text>
  - </View>
- )

- return <View>
  - <Text>Hi There</Text>
- </View>

- Incorrect Way
- return 
- <View>
  - <Text>Hi There</Text>
- </View>

- This is interpreted as 
- return;
- // And then the multiple lines of code
- Basically it is understood as a empty return statement

## Creating a list in React Native
- We use the inbuilt FlatList element
- Turns an array into a list of elements
- Need to pass two props, (i) data, (ii) renderItem -> This is a function that is passed over to each array item to make it display on the mobile screen
# Syntax:
<FlatList
    data={arrayName}
    renderItem={ (element) => {
    }
    }    
/>
    // Here element is not just the elements of array.
    It is actually a object which contains certain information about a particular element of the array.
    If you log it in the console, you will get something like this ->
    // element = { item: { key: 'arrayItem1' }, { index: 0 }}
    It will store the entire array element and index.

Since element here is complete in all object, so we de-structure it, and use only {item} to get the array element, just like:
<FlatList
    data={arrayName}
    renderItem={ ({item}) => {
    }
    }    
/>

Here  item === { name: "Chole Bhature" }

## Concept of keys
- Currently, we haven't passed any key property in our list elements.
- So consider a scenario if we want to delete any particular element, like element 6.
- In this case how it will update the list is, first of all it will remove all the elements and then again it will re-render the whole list, and will not print the deleted element.

- But in the case if we use keys, react-native will be able to uniquely identify all the list items. In this case, it will only delete the particular item number (lets say 'x'), and will modify the list, and there will be no effect on the rest of list.
- It is a way to optimize the performance.
- Overall keys are a way to uniquely identify all the elements in react native. Its the same concept in ReactJS.
- keys have to be a string of characters and it should not be a number
  
## Buttons in React-Native
- There are two kinds of button in React-Native
# (i) Button 
- These are simple components for showing button and detecting a press.  
- Button is a self-closing element.
- You need to give two props to it: 
- (i) title: Basically a string that shows up inside the button. It can be simply passed inside the inverted quotes,     there's no need to use curly braces as like with other props.
- (ii) onPress: Like we use onClick in JS, it is the same here as onPress, you need to pass a function that will tell the button what to perform on being pressed.
- 
### e.g.
  <Button
    onPress={ () => console.log("Button Pressed") }
    title="Go To Components Demo"
  />

# (ii) Touchable Opacity 
- They are highly customizable components able to detect a press on any kind of component.
- It is not a self-closing element.
- It provides a default style of fading in & out on being clicked to any component.
- In a similar way we pass the onPress prop to button element, we do it here also.
- It doesn't have a title prop, we can put any number of element inside of it.
### e.g.
-  <TouchableOpacity onPress={ () => console.log("Open List") } >
      <Text style={ styles.buttonSize }>Go To List Demo</Text>
      <Text style={ styles.buttonSize }>Go To List Demo</Text>
    </TouchableOpacity>

## Navigating / Routing in React-Native
- StackNavigator is the one doing the part of navigation behind the scenes in react-native
- It is responsible for showing the content on the screen
- While rendering a component at a certain point of time, it passes down some config options as props.
- We can also pass props to customm components also
- for example let's pass props to our HomeScreen Component and see what are the the properties tied to it.
- {"navigation": {"actions": {"dismiss": [Function dismiss], "goBack": [Function goBack], "navigate": [Function navigate], "pop": [Function pop], "popToTop": [Function popToTop], "push": [Function push], "replace": [Function replace], "reset": [Function reset], "setParams": [Function setParams]}, "addListener": [Function addListener], "dangerouslyGetParent": [Function anonymous], "dismiss": [Function anonymous], "dispatch": [Function anonymous], "emit": [Function emit], "getChildNavigation": [Function getChildNavigation], "getParam": [Function anonymous], "getScreenProps": [Function anonymous], "goBack": [Function anonymous], "isFirstRouteInParent": [Function isFirstRouteInParent], "isFocused": [Function isFocused], "navigate": [Function anonymous], "pop": [Function anonymous], "popToTop": [Function anonymous], "push": [Function anonymous], "replace": [Function anonymous], "reset": [Function anonymous], "router": undefined, "setParams": [Function anonymous], "state": {"key": "id-1691740151005-1", "routeName": "Home"}}, "screenProps": undefined}
- Now one of the properties in this object is navigation, in which we have one specific key as 'navigate'.
- so to navigate to one of the specific page/screen in our app we take the help of this property.
- we can assign the onPress a function that will redirect us to the that specific page
### e.g.
- <Button
    onPress={ () => props.navigation.navigate("Components") }
    title="Go To Components Demo"
  />
  <TouchableOpacity onPress={ () => props.navigation.navigate("List") } >
    <Text style={ styles.buttonSize }>Go To List Demo</Text>
    <Text style={ styles.buttonSize }>Go To List Demo</Text>
  </TouchableOpacity> 
- The keyword that we define inside this function is the keyword that is defined in the list in App.js file
- const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,              // This is the object that contains all the screens of our app
    List: ListScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);  

Since we are only utilizing the navigation property here, we can destructurize the props received in the following way:
Instead of taking the whole props as a argument in our component, we could do it this way:

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={ styles.text }>My First App </Text>
      <Button
        onPress={ () => navigation.navigate("Components") }
        title="Go To Components Demo"
      />
      <Button
        onPress={ () => navigation.navigate("List") }
        title="Go To List Demo"
      />
      <Button
        onPress={ () => navigation.navigate("Images") }
        title="Go To Images" />
    </View>
  );
};
What we do here is destructuring the props object, and taking only the necessary part in our code i.e. naviagtion.
It is a better way to concise our code.

## Props in react-native

- In React Native, "props" (short for properties) are a fundamental concept used to pass data and configuration between different components.
  
- Props allow you to provide values from a parent component to a child component. This enables you to create reusable and modular components that can display different data or behavior based on the values of the props they receive.
  
- Props can be used to pass various types of data, such as strings, numbers, arrays, objects, functions, and even other React components. They allow you to create flexible and customizable UI components by changing their behavior or appearance based on the data passed via props.

- Whenever you pass data from parent to child in the form of props, they are transferred as objects.
  
- Props are read-only, meaning that the child component should not modify the props it receives directly. If a child component needs to manage its own state or modify data, it should use its own state or receive callback functions as props to communicate with the parent component.
  
- Overall, props are a crucial mechanism for building dynamic and interactive user interfaces in React Native and React-based applications.

## Screen V/S Components
- The key distinction between screens and components in React Native is that screens represent entire views or sections of your app, often tied to navigation, while components are modular building blocks that make up these screens and other parts of your app's UI. 

# State in react-native
- State is used to track a single piece of data, and any time it changes, we might need to update/re-render the content visible on our screen.  

# Managing state b/w Parent & Child components
- Generally we create state variables in the most parent compomemt that needs to read or change a state value.
- But there are some exceptions as well
- If a child needs to read a state value, the parent can pass it down as a prop
- If we want our child components to change the value of the state variable, in this case, we need to pass a callback function to them.

## Passing Callbacks to Children
- So taking the example of our application where we are trying to render a block of colour by maintaing the values of Red, Green & Blue Colour intensity,
- We hava a parent component, 'SquareColour' and its child, 'ColourDetail'
- In the ColourDetail component, we need to give it the access to modify the RGB values, i.e. increase or decrease the value of their intensity.
- But we have declared the state variable of these int the parent component, i.e. SquareColour.
- So what we do here is we pass down the callback functions as a prop to the child component.
- We pass down two props, that are onIncrease and onDecrease, and what they actually contain is the set method provided by the state variable.
- So what we can infer from this is that, we are actually passing the setter functions, but not directly and applying a layer of abstraction to it.
  
### NOTE
- If you want to create a const variable out of the component scope, there is a particular naming convetion for it, i.e., it should be in uppercase and if it is more then one word, then it should be separated by underscore.
- e.g. COLOR_INCREMENT

# useReducer - When to use ?
- When we have some closely related state variables and we know when and how we have to update them, we use the concept of Reducers.
- Reducers - FunctionThatManagaesChangesToAnObject

arg1 -> Object that has all our state variables in it

arg2 -> Also an object that describes the update that we want to make in arg1
# Reusable State Updates
# useReducer Hook