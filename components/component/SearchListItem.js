import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
export default SearchListItem = ({title, uriLink,...props}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.imageResult} source={{ uri: uriLink }} />
      </View>
      <View>
        <Text>{title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b252f',
    marginBottom:5,
    flexDirection: 'row',
  },imageResult: {
    height:300
  },descriptionAvatarStyle: {
    paddingLeft:10,

  }
})