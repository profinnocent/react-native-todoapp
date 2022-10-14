import React from "react";
import { View, Image, TextInput, Text, StyleSheet, Button } from "react-native";
import appcolors from "../app/assets/colors/colors";

const Addtodo = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.tbox} placeholder="Enter task here" />
      <Button title="ADD" style={styles.addbtn}></Button>
    </View>
  );
};

export default Addtodo;

const styles = StyleSheet.create({
  container: {},
  tbox: {
    backgroundColor: appcolors.offwyt,
    width: "100%",
    marginTop: 15,
    marginBottom: 10,
    paddingLeft: 10,
    fontSize: 18,
  },
  addbtn: {
    backgroundColor: appcolors.acentclr,
    fontWeight: "bold",
  },
});
