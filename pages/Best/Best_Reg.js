import React from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NavTab  from "./Navigator";
import { MaterialIcons } from "@expo/vector-icons";

export default function Best({ route }) {
  switch (route.name) {
    case "Best":
      iconName = "Best_Reg";
      break;
    case "Best_Prog":
      iconName = "Best_Prog";
      break;
    case "Best_Finished":
      iconName = "Best_Finished";
      break;
  }
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}
    >
      <Text style={styles.text}>Hello from Best</Text>
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate(Complaint)}
      >
        <MaterialIcons name="add" size={24} color="white" />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Center vertically
     // Center horizontally
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  fab: {
    position: "absolute",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    right:20,
    top:450,
    backgroundColor: "#2196F3",
    borderRadius: 30,
    elevation: 5, // For Android shadow
  },
});
