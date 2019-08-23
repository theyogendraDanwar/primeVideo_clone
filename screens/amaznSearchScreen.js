import React from 'react'
import {
  View,
  StyleSheet,
  TextInput,
} from 'react-native'
import { dimen, debounce } from '../utils/Dimensions'
import SearchListItem from '../components/component/SearchListItem'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default amaznSettingsScreen = () => {
  _renderItem = ({ item }) => (
    <SearchListItem
      title={item.title}
      uriLink={item}
      _onPress={'aItemDetails'}
    />
  );
  __updateList = debounce(e => {
    fetch(`http://www.omdbapi.com/?s=${e}&apikey=`)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }, 150);
  return (
    <View style={styles.container}>
      <View style={styles.searchBarStyle}>
        <View style={styles.iconStyle}><Ionicons name='ios-search' size={25} color='black' /></View>
        <TextInput placeholder="Search" style={{ width: '100%', paddingLeft: 40 }} placeholderTextColor='black'
          onChangeText={e => __updateList(e)} />
      </View>
      <FlatList
        style={{ flex: 1 }}
        data={tabListData}
        renderItem={_renderItem}
        keyExtractor={(item, index) => item.title}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#152d3f',
    padding: 20,
  },
  iconStyle: {
    position: 'absolute',
    zIndex: 1,
    left: 5,
    top: 10
  },
  searchBarStyle: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginLeft: 10,
    borderRadius: 5,
    marginRight: 10
  }
})