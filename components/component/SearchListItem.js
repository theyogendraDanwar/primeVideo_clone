import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { withNavigation } from 'react-navigation';
import { dimen } from '../../utils/Dimensions'

const SearchListItem = ({title, uriLink, year, imdbID,...props}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={()=> {
      props.navigation.navigate(props._onPress, {
        imdbID: imdbID
      })
    }}>
      <View style={styles.imageContainer}>
        <Image  style={{width:'100%', height:'100%'}} resizeMode="contain" source={{ uri: uriLink }} />
      </View>
      <View style={styles.descriptionStyle}>
        <Text style={{flexWrap:'wrap',fontSize: 17, color: 'white', fontWeight: 'bold'}}>{title}</Text>
        <Text style={{color:'#8397a2',paddingTop:5}}>{year}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexBasis: dimen('window').width,
    backgroundColor: '#1b252f',
    borderRadius: 5,
    marginBottom: 5,
    flexDirection: 'row',
    flex:1
  },
  imageContainer: {
    width: 150,
    height: 150,
    backgroundColor: 'white'
  },
  descriptionStyle: {
    paddingLeft:10,
    paddingTop: 5,
    paddingRight:10,
    flex:1,
  }
})

export default withNavigation(SearchListItem);