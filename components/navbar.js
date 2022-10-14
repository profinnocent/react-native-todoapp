// import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import appcolors from "../app/assets/colors/colors";

const MyNavbar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.maintext}>React Native ToDo App</Text>
      <Image
        source={require("../app/assets/images/ballicon.png")}
        alt="pix"
        style={styles.imgstyle}
      />
    </View>
  );
};

export default MyNavbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    justifyContent: "center",
  },
  maintext: {
    fontSize: 20,
    color: appcolors.priclr,
    fontWeight: "bold",
  },
  imgstyle: {
    width: 30,
    height: 30,
    marginEnd: 5,
  },
});
