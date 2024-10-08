import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button, TextInput, TouchableOpacity, Text } from "react-native";
import { firebase } from "../firebaseConfig";

const Complaint = () => {
  const todoRef = firebase.firestore().collection("Best_Complaint");
  const [addData, setAddData] = useState("");
  const [description, setDescription] = useState("");
  const [refNumber, setRefNumber] = useState("");

  const addField = () => {
    if (
      addData &&
      addData.length > 0 &&
      description &&
      description.length > 0 &&
      refNumber &&
      refNumber.length > 0
    ) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        heading: addData,
        description: description,
        refNumber: refNumber,
        createdAt: timestamp,
      };
      todoRef
        .add(data)
        .then(() => {
          setAddData("");
          setDescription("");
          setRefNumber("");
          Keyboard.dismiss();
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#aaaaaa"
          onChangeText={(heading) => setAddData(heading)}
          value={addData}
          multiline={false}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          placeholderTextColor="#aaaaaa"
          onChangeText={(description) => setDescription(description)}
          value={description}
          multiline={true}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Reference Number"
          placeholderTextColor="#aaaaaa"
          onChangeText={(refNumber) => setRefNumber(refNumber)}
          value={refNumber}
          multiline={false}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={addField}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: "column",
    height: 250,
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    paddingLeft: 16,
    marginBottom: 10,
  },
  button: {
    height: 47,
    borderRadius: 5,
    backgroundColor: "#788eec",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  mapContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
export default Complaint;
