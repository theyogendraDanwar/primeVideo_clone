import React from 'react';
import {View, ScrollView, StyleSheet, Text, Dimensions} from 'react-native';
import CardTile from '../component/CardTile';

export const CartTileWrapper = (props) => {
  const width = Dimensions.get('window').width;
  const {data, title, cardTileStyle, onPress} = props;
  return (
    <View style={styles.container}>
      <Text style={[{ textAlign: "left", padding: 10, color: 'white', backgroundColor: 'pink' }, { width: width }]}>{title}</Text>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        style={[{ width: width }]}
      >
        {data.map((item, index) => {
          return <CardTile
            data={item}
            key={index}
            styles={cardTileStyle}
            onPress={onPress}
             />
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});