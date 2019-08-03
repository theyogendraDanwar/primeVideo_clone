import React, {useEffect} from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation'


const CardTile = (props) => {
  const { data, styles, onPress } = props;
  const navigateto = onPress ? onPress : '';
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate(navigateto)}>
       <Image
    style={Object.assign(styles)}
    source={{ uri: data.link }} />
    </TouchableOpacity>
  )
}

export default withNavigation(CardTile);