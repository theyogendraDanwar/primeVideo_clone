import React, { useState, useEffect, useRef } from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
} from "react-native";

import { dimen } from '../../utils/Dimensions'

const Carousel = ({ data, isautoplay, timelapse, ...props }) => {
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
              source={{ uri: `${item.link}` }}
              key={index}
            >
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
    backgroundColor: "red",
    flex: 1,
    top: 0
  }
});

export default Carousel;