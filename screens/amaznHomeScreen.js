import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  ScrollView,
  RefreshControl
} from 'react-native';

import Carousel from '../components/component/Carousel'
import { CartTileWrapper } from '../components/Wrapper/CardTileWrapper'
import * as hooks from '../reduxhooks/useHttp';
import * as CONSTANTS from '../utils/Constants'

export default amaznHomeScreen = (props) => {
  const [refreshCount, updateRefreshCount] = useState(0);
  const [isNowPlayingLoading, fetchedData] = hooks.useHttp(`${CONSTANTS.CONFIG.API_URL}/${CONSTANTS.CONFIG.MOVIE_CALL}/now_playing?${CONSTANTS.CONFIG.APIKEY}&language=en-US`, refreshCount);
  const [isPopularLoading, fetchPopularData] = hooks.useHttp(`${CONSTANTS.CONFIG.API_URL}/${CONSTANTS.CONFIG.MOVIE_CALL}/popular?${CONSTANTS.CONFIG.APIKEY}&language=en-US`, refreshCount);
  const [isTopRatedLoading, fetchTopRatedData] = hooks.useHttp(`${CONSTANTS.CONFIG.API_URL}/${CONSTANTS.CONFIG.MOVIE_CALL}/top_rated?${CONSTANTS.CONFIG.APIKEY}&language=en-US&page=1`, refreshCount);
  
  const nowPlayingData = fetchedData ? fetchedData.results ? fetchedData.results : CONSTANTS.cdata : CONSTANTS.cdata ;
  const nowPopularData = fetchPopularData ? fetchPopularData.results ? fetchPopularData.results : CONSTANTS.carddata : CONSTANTS.carddata ;
  const nowTopRatedData = fetchTopRatedData ? fetchTopRatedData.results ? fetchTopRatedData.results : CONSTANTS.carddata : CONSTANTS.carddata ;

  const finalRefresh = isNowPlayingLoading + isPopularLoading + isTopRatedLoading == 0 ? false : true;

  useEffect(() => {
    updateRefreshCount((refreshCount) => refreshCount + 1);
  },[])
  __handleRefresh = () => {
    updateRefreshCount((refreshCount) => refreshCount + 1);
  }
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={finalRefresh}
          onRefresh={__handleRefresh}
        />
      }
      vertical={true}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <Carousel data={nowPlayingData} isautoplay timelapse={10000} _onPress="aItemDetails"/>
      <CartTileWrapper data={nowPopularData} cardTileStyle={{
        marginRight: 10,
        width: 150,
        height: 150,
        borderRadius: 5
      }} title="Popular Movies" onPress="aItemDetails" />
      <CartTileWrapper 
      data={nowTopRatedData} 
      cardTileStyle={{
        marginRight: 10,
        width: 150,
        height: 150,
        borderRadius: 5
      }} 
      title="Top Rated Movies" onPress="aItemDetails" />
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
