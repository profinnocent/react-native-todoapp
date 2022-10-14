import React, { useState } from "react";
import {
  View,
  Image,
  TextInput,
  Text,
  StyleSheet,
  Button,
  FlatList,
  SafeAreaView,
} from "react-native";
import appcolors from "../app/assets/colors/colors";
import Task from "./task";

const Todoarea = ({ data, setTodos }) => {
  const [selectedId, setSelectedId] = useState(null);

  // Handle render tasks
  const renderItem = ({ item }) => {
    <Task task={item.title} />;
    console.log("renderitems");

    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? "white" : "black";
  };

  return (
    <View style={styles.container}>
      <Text style={styles.maintext}>Your Tasks :</Text>
      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </View>
  );
};

export default Todoarea;

const styles = StyleSheet.create({
  container: { marginTop: 20, marginBottom: 5 },
  maintext: { fontSize: 20, fontWeight: "bold", color: appcolors.priclr },
  addbtn: {},
});
