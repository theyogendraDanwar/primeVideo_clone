import React from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native'

export default CircleButton = (props) => {
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() => props.onPress}>
      <View>
        <Image source={{ uri: `${props.link}` }} style={styles.imageContainer} />
      </View>
      <View>
        <Text style={styles.textStyle}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    borderRadius: 100,
    width: 30,
    height: 30
  },
  textStyle: {
    color: 'white',
    fontSize: 14
  }
})