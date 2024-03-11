import React from "react";
import { View, Text } from "react-native";
import Swiper from "react-native-swiper";

export const ScrollingPage = () => {
  return (
    <Swiper>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Vue 1</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Vue 2</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Vue 3</Text>
      </View>
    </Swiper>
  );
};
