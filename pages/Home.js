import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import Drawer from "./Drawer";

import IRCTC_REG from "./Irctc/IRCTC_HOME";

const images = {
  widget1: require("../icons/best.jpg"),
  widget2: require("../icons/irctc.png"),
  widget3: require("../icons/bmc.jpg"),
  widget4: require("../icons/hospital.png"),
  widget5: require("../icons/Road.png"),
  widget6: require("../icons/PWD.jpg"),
  widget7: require("../icons/other.png"),
};

const Stack = createNativeStackNavigator();

export default function Home({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.widget}>
        <Pressable onPress={() => navigation.navigate("Best")}>
          <Image style={styles.icon} source={images.widget1} />
        </Pressable>
        <Text style={styles.text}>BEST</Text>
      </View>
      <View style={styles.widget}>
        <Image style={styles.icon} source={images.widget2} />
        <Text style={styles.text}>IRCTC</Text>
      </View>
      <View style={styles.widget}>
        <Image style={styles.icon} source={images.widget3} />
        <Text style={styles.text}>Water and Waste</Text>
      </View>
      <View style={styles.widget}>
        <Image style={styles.icon} source={images.widget4} />
        <Text style={styles.text}>Public Healthcare</Text>
      </View>
      <View style={styles.widget}>
        <Image style={styles.icon} source={images.widget5} />
        <Text style={styles.text}>Road & Transport</Text>
      </View>
      <View style={styles.widget}>
        <Image style={styles.icon} source={images.widget6} />
        <Text style={styles.text}>Recreational Areas</Text>
      </View>
      <View style={styles.widget}>
        <Image style={styles.icon} source={images.widget7} />
        <Text style={styles.text}>Other Services</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    paddingVertical: 20,
  },
  widget: {
    alignItems: "center",
    marginBottom: 20,
    padding: 12,
  },
  icon: {
    width: 140,
    height: 120,
    marginBottom: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
