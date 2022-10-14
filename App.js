import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import MyNavbar from "./components/navbar";
import { useFonts } from "expo-font";
import appcolors from "./app/assets/colors/colors";
import Addtodo from "./components/addtodo";
import Todoarea from "./components/todoarea";
import { useState } from "react";
import Task from "./components/task";

const DATA = [
  {
    id: 1,
    title: "First Item",
  },
  {
    id: 2,
    title: "Second Item",
  },
];

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "First Item",
    },
    {
      id: 2,
      title: "Second Item",
    },
    {
      id: 3,
      title: "Third Item",
    },
  ]);

  const [loaded] = useFonts({
    Roboto: require("./app/assets/fonts/Roboto-Regular.ttf"),
  });

  if (!loaded) {
    console.log("Fonts not loaded");
    return null;
  } else {
    console.log("Fonts loaded");
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{ color: appcolors.priclr }}>React Native</Text>
      <MyNavbar />
      <Addtodo />
      <Todoarea data={DATA} setTodos={setTodos} />
      <Task task={"Task 1"} />
      <Task task={"Task 1"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appcolors.secclr,
    paddingTop: 40,
    paddingHorizontal: 20,
    fontFamily: "Roboto",
  },
});
