import React from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';

import Carousel from '../components/component/Carousel';
import { CartTileWrapper } from '../components/Wrapper/CardTileWrapper';
import * as CONSTANTS from '../utils/Constants'

export default amaznHomeScreen = (props) => { 
  return (
    <ScrollView
      vertical={true}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <Carousel data={CONSTANTS.cdata} isautoplay timelapse={10000} />
      <CartTileWrapper data={CONSTANTS.carddata} cardTileStyle={{
        paddingRight: 10, width: 150,
        height: 150,
        borderRadius: 5
      }} title="Best Movies in Hindi" onPress="aItemDetails"/>
      <CartTileWrapper data={CONSTANTS.carddata} cardTileStyle={{
        paddingRight: 10, width: 150,
        height: 150,
        borderRadius: 5
      }} title="Popular Movies" onPress="aItemDetails"/>
      <CartTileWrapper data={CONSTANTS.carddata} cardTileStyle={{
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
