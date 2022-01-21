import React from "react";
import { Text, View } from "react-native";

const CustomCompo = ({ name }) => {
  return (
    <View>
      <Text>Welcome back {name} through props!!</Text>
      <Text>Hello I am Custom from native!✅✅</Text>
    </View>
  )
};

export default CustomCompo;
