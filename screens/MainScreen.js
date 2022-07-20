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
    url: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '2',
    name: 'img02.jpg',
    url: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '3',
    name: 'img03.jpg',
    url: 'https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '4',
    name: 'img04.jpg',
    url: 'https://images.pexels.com/photos/2058498/pexels-photo-2058498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '5',
    name: 'img05.jpg',
    url: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg',
  },
];

const MainScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.headerText}>
      <FlatList
        data={IMAGES}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ImageScreen', {
                name: item.name,
                url: item.url,
              })
            }
            style={styles.listItem}>
            <Text style={styles.listName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default MainScreen;
