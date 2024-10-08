import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Best_Finished() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from Finished Worked</Text>
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
