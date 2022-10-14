import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import appcolors from "../app/assets/colors/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontawesome from "@expo/vector-icons/FontAwesome";
import Materialcom from "@expo/vector-icons/MaterialCommunityIcons";
import Materialicons from "@expo/vector-icons/MaterialIcons";

const Task = ({ task }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.maintext}>{task}</Text>
      <View style={styles.iconarea}>
        <Ionicons name="md-trash-bin" size={20} color={appcolors.acentclr} />
        <Ionicons
          style={styles.iconitem}
          name="md-checkmark-circle"
          size={20}
          color="green"
        />
      </View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    backgroundColor: appcolors.offwyt,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  iconarea: {
    flexDirection: "row",
    alignItems: "center",
  },
  maintext: {
    color: appcolors.priclr,
    padding: 10,
    fontWeight: "bold",
  },
  iconitem: {
    paddingHorizontal: 10,
  },
});
