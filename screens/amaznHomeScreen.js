/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
} from 'react-native';

import Carousel from '../components/component/Carousel';
import { CartTileWrapper } from '../components/Wrapper/CardTileWrapper';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

const data = [
  { title: "Slide1", link: 'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg' },
  { title: "Slide2", link: 'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg' },
  { title: "Slide3", link: 'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg' },
  { title: "Slide4", link: 'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg' }
];

const carddata = [
  { alttext: 'image1', link: 'https://www.boostlabs.com/wp-content/uploads/2017/10/Steep-Mountain@4x-150x150.png' },
  { alttext: 'image1', link: 'https://www.boostlabs.com/wp-content/uploads/2017/10/Steep-Mountain@4x-150x150.png' },
  { alttext: 'image1', link: 'https://www.boostlabs.com/wp-content/uploads/2017/10/Steep-Mountain@4x-150x150.png' },
]

export default amaznHomeScreen = (props) => { 
  return (
    <ScrollView
      vertical={true}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <Carousel data={data} isautoplay timelapse={10000} />
      <CartTileWrapper data={carddata} cardTileStyle={{
        paddingRight: 10, width: 150,
        height: 150,
        borderRadius: 5
      }} title="Best Movies in Hindi" onPress="aItemDetails"/>
      <CartTileWrapper data={carddata} cardTileStyle={{
        paddingRight: 10, width: 150,
        height: 150,
        borderRadius: 5
      }} title="Popular Movies" onPress="aItemDetails"/>
      <CartTileWrapper data={carddata} cardTileStyle={{
        paddingRight: 10, 
        width: 150,
        height: 150,
        borderRadius: 5
      }} title="Popular Movies to show" onPress="aItemDetails" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222222',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
