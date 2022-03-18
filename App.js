import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Counter from "./Components/Counter";
import CustomCompo from "./Components/CustomCompo";
import ImageComponent from "./Components/ImageComponent";
import PropComponent from "./Components/PropComponent";
import ColorChanger from "./screens/ColorChanger";
import Netflix from "./screens/NetflixCard";
import FlastListDemo from "./screens/FlastList";
import FetchData from "./screens/FetchData";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const Stack = createNativeStackNavigator()
  // let name = "Shreyas"
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={FetchData} />
      </Stack.Navigator>
    </NavigationContainer>
  )
  // <View >
  {/* <LoginScreen /> */ }
  {/* <FetchData /> */ }
  {/* <ColorChanger /> */ }
  {/* <Counter /> */ }
  {/* <Netflix /> */ }
  {/* <PropComponent /> */ }
  {/* <ImageComponent /> */ }
  {/* <Text style={styles.para}>Heyy Shreyas 🚀❤️ </Text> */ }
  {/* <FlastListDemo /> */ }
  {/* <CustomCompo name={name} /> */ }
  {/* <StatusBar style="auto" /> */ }
  // </View >
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
