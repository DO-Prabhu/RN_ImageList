/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import ImageScreen from './screens/ImageScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen}></Stack.Screen>
        <Stack.Screen name="ImageScreen" component={ImageScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
