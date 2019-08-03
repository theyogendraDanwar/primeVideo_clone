import React from 'react';
import {
  View,
  Stylesheet,
  Text,
  Image,
  Dimensions
} from 'react-native';


export default CardImage = (props) => {
  const { data, cardStyle } = props;
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  return (
    <View style={{
      flex:1,
      width:  width,
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
    {data ? data.map((item,index)=> {
      return (
        <View key={index}>
          <Image  
      style={Object.assign(cardStyle)}
      source={{ uri: item.link }} />
      <Text>{item.title}</Text>
        </View>
      )
    }) : ''
     }
    </View>
  )
}