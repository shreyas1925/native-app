import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomCompo from "./Components/CustomCompo";

export default function App() {
  let name = "Shreyas"
  return (
    <View style={styles.container} >
      <Text style={styles.para}>Heyy Shreyas 🚀❤️ </Text>
      <CustomCompo name={name} />
      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "skyblue",
  },

  para: {
    fontSize: 25,
    fontFamily: "sans-serif",
  },
});
