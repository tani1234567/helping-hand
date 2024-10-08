import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function IRCTC_REG() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from IRCTC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
