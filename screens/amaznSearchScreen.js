import React, { useRef, useState } from 'react'
import {NavigationEvents} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  RefreshControl
} from 'react-native'
import { debounce } from '../utils/Dimensions'
import SearchListItem from '../components/component/SearchListItem'
import { useStateContext } from '../reduxhooks/state';

export default amaznSearchScreen = (props) => {
  const [state, dispatch] = useStateContext();
  const [searchValue, updateSearchValue] = useState('')
  let textInputRef = useRef();
  const __updateRequest = debounce((e) => {
    updateSearchValue(e)
   dispatch({ type: 'ACTIVATE_SPINNER_LOADING' })
   fetch(`https://www.omdbapi.com/?s=${e}&apikey=`)
     .then(response => response.json())
     .then(data =>
       dispatch({
         type: 'UPDATE_SEARCH_DATA',
         payload: data.Search
       })
     )
     .catch(error => console.log(error))
  },500)
  __handleRefresh = () => {
    __updateRequest(searchValue);
  }
  _renderItem = ({ item }) => {
    return <SearchListItem
      title={item.Title}
      year={item.Year}
      uriLink={item.Poster}
      imdbID={item.imdbID}
      _onPress={'aItemDetails'}
    />
  }
  return (
    <View style={styles.container}>
      <NavigationEvents
      onDidBlur={payload => textInputRef.setNativeProps({text: ''})}
    />
      <View style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 20 }}>
        <View style={styles.searchBarStyle}>
          <View style={styles.iconStyle}><Ionicons name='ios-search' size={25} color='black' /></View>
          <TextInput placeholder="Search" 
          ref={component => textInputRef = component}
          style={{ width: '100%', paddingLeft: 40 }} placeholderTextColor='black'
            onChangeText={(e) => __updateRequest(e)}  />
        </View>
      </View>
      <FlatList
        style={{ flex: 1 }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={state.search.loading}
            onRefresh={__handleRefresh} />
        }
        data={state.search.data}
        renderItem={_renderItem}
        keyExtractor={(item) => item.imdbID}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e171e',
    paddingTop: 20,
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
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    marginLeft: 10,
    borderRadius: 5,
    marginRight: 10
  }
})