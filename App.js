import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomCompo from "./Components/CustomCompo";
import ImageComponent from "./Components/ImageComponent";
// import FlastListDemo from "./screens/FlastList";

export default function App() {
  let name = "Shreyas"
  return (
    <View >
      <ImageComponent />
      {/* <Text style={styles.para}>Heyy Shreyas 🚀❤️ </Text> */}
      {/* <FlastListDemo /> */}
      {/* <CustomCompo name={name} /> */}
      {/* <StatusBar style="auto" /> */}
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  para: {
    fontSize: 25,
    fontFamily: "sans-serif",
  },
});
