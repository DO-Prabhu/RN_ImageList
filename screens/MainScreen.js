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

import {styles} from '../Styles/style';
const IMAGES = [
  {
    id: '1',
    name: 'img01.jpg',
    uri: 'https://www.pexels.com/photo/pink-rose-736230/',
  },
  {
    id: '2',
    name: 'img02.jpg',
    uri: 'https://www.pexels.com/photo/close-up-photograph-of-flowers-931177/',
  },
  {
    id: '3',
    name: 'img03.jpg',
    uri: 'https://www.pexels.com/photo/close-up-photography-of-pink-flowers-1408221/',
  },
  {
    id: '4',
    name: 'img04.jpg',
    uri: 'https://www.pexels.com/photo/tulip-flowers-2058498/',
  },
  {
    id: '5',
    name: 'img05.jpg',
    uri: 'https://www.pexels.com/photo/pink-petaled-flowers-closeup-photo-992734/',
  },
];

const Item = ({id, name}) => {
  const handlePress = id => {
    const image = IMAGES.find(img => {
      return img.id === id;
    });

    Alert.alert(`Image Name :${image.name} and Id: ${image.id}`);
  };

  return (
    <TouchableOpacity onPress={() => handlePress(id)} style={styles.listItem}>
      <Text style={styles.listName}>{name}</Text>
    </TouchableOpacity>
  );
};

const MainScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.headerText}>
      <FlatList
        data={IMAGES}
        renderItem={({item}) => <Item id={item.id} name={item.name} />}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('ImageScreen')}
        style={{
          backgroundColor: '#AD40AF',
          padding: 20,
          width: '90%',
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 50,
        }}>
        <Text>Move To Image Screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MainScreen;
