import React from 'react';
// import type {Node} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  TextInput,
  StyleSheet,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';


const ImageScreen = ({route, navigation}) => {
 const {name, url} =  route.params;
  return (
    <SafeAreaView>
      <Text>{ name }</Text>
      <Image source={{uri: url}} style={{width:200, height:200}} />
    </SafeAreaView>
  );
};

export default ImageScreen;
