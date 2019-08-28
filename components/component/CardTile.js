import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation'


const CardTile = ({ data, styles, onPress , ...props}) => {
  const navigateto = onPress ? onPress : '';
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate(
      navigateto, {imdbID: data.id}
    )}>
       <Image
    style={Object.assign(styles)}
    source={{ uri: `http://image.tmdb.org/t/p/w500/${data.backdrop_path}` }} />
    </TouchableOpacity>
  )
}

export default withNavigation(CardTile);