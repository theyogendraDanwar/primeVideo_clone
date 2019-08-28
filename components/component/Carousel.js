import React, { useState, useEffect, useRef } from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { withNavigation } from 'react-navigation'

import { dimen } from '../../utils/Dimensions'

const Carousel = ({ data, isautoplay, timelapse, _onPress, ...props }) => {
  const [position, updateCarouselPosition] = useState(0);
  const myRef = useRef(0);
  const width = dimen("window").width;
  useEffect(() => {
    const __onRef = (timeline = 5000) => {
      setTimeout(() => {
        position > data.length - 2
          ? updateCarouselPosition(0)
          : position !== null
            ? updateCarouselPosition(position + 1)
            : "";
      }, timeline);
    };
    myRef.current
      ? myRef.current.scrollTo({ x: width * position, y: 0, animated: true })
      : "";
    isautoplay
      ? data.length > 0
        ? myRef.current
          ? __onRef((timeline = timelapse))
          : ""
        : ""
      : "";
  }, [position]);

  return (
    <View
      style={{
        height: 200,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        backgroundColor: "red"
      }}
    >
      <ScrollView
        ref={myRef}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={[
          {
            width: width,
            height: 200
          },
          styles.container
        ]}
      >
        {data.map((item, index) => {
          return (
            <ImageBackground
              style={{ width: width, position: "relative", height: 200 }}
              source={{ uri: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}` }}
              key={index}
              resizeMode="contain"
            >
              <TouchableOpacity style={{position: "absolute",
                  bottom: 0,
                  left: 0,
                  top:0,
                  bottom:0,
                  backgroundColor: 'transparent',
                  zIndex:10,
                  width: width
                }}
                onPress={() =>props.navigation.navigate(_onPress, {
                imdbID: item.id
              })}>
                <Text>""</Text>
              </TouchableOpacity>
              <Text
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  fontWeight: "bold",
                  zIndex: 1,
                  color: "pink",
                  backgroundColor: "black",
                  textAlign: "center"
                }}
              >
                {item.title}
              </Text>
            </ImageBackground>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    top: 0
  }
});

export default withNavigation(Carousel);