import React from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';

export default IconButton = (props) => {
  return (
    <TouchableOpacity style={styles.buttonStyle}
      onPress={() => props.onPress()}
    >
      <Image
        source={{ uri: `${props.link}` }}
        style={styles.ImageIconStyle}
      />
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Text style={styles.TextStyle}>{props.titleText}</Text>
        <Text style={styles.TextStyle}>{props.subText}</Text>
      </View>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgb(6, 126, 254)',
    borderRadius: 5,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 10,
    width: 10,
    resizeMode: 'stretch',
  },
  TextStyle: {
    color: "#fff",
    marginBottom: 4,
    marginRight: 20,
  },
})