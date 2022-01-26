import React from "react";
import { Text, View, StyleSheet } from "react-native";

const CustomCompo = ({ name }) => {
  return (
    <View>
      <Text style={styles.firstText}>Welcome back {name} through props!!</Text>
      <Text style={styles.secondText}>Hello I am Custom from native!✅✅</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  firstText: {
    color: "red",
    fontSize: 40,
    fontWeight: "bold",
  },
  firstText: {
    color: "blue",
    fontSize: 30,
  }
})

export default CustomCompo;
