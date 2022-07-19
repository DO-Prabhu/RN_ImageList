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

const IMAGES = [
  {
    id: 1,
    image: require('../assets/images/rose.jpg'),
    name: 'Flower 1',
  },
  {
    id: 2,
    image: require('../assets/images/lily.jpg'),
    name: 'Flower 2',
  },
  {
    id: 3,
    image: require('../assets/images/sunflower.jpg'),
    name: 'FLower 3',
  },
];

const Item = ({name, image}) => {
  return (
    <View>
      <Image source={image} style={{width:200, height:200}}/>
      <Text>{name}</Text>
    </View>
  );
};

const ImageScreen = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={IMAGES}
        renderItem={({item}) => <Item name={item.name} image={item.image} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default ImageScreen;
