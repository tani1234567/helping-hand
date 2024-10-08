import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome6, FontAwesome } from "@expo/vector-icons";
import { Text, View, StyleSheet } from "react-native";
import Best_Finished from "./Best_Fin";
import Best_Reg from "./Best_Reg";
import Best_Prog from "./Best_In_Pro";
const Tab = createBottomTabNavigator();

const NavTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          switch (route.name) {
            case "BestHome":
              iconName = "bus";
              break;
            case "BestInProgress":
              iconName = "bars-progress";
              break;
            case "BestFinished":
              iconName = "circle-check";
              break;
          }
          return <FontAwesome6 name={iconName} size={size} color={color} />;
        },
        tabBarLabel: ({ children, color, focused }) => (
          <Text
            style={{
              fontSize: 10,
              color,
              fontWeight: focused ? "bold" : "normal",
            }}
          >
            {children}
          </Text>
        ),
        tabBarStyle: styles.tabBarStyle,
        tabBarItemStyle: styles.tabBarItemStyle,
        tabBarActiveBackgroundColor: "#ca8a04",
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#0007",
        headerTintColor: "#ca8a04",
        headerTitleAlign: "center",
        headerStyle: styles.headerStyle,
      })}
    >
      <Tab.Screen
        name="BestHome"
        component={Best_Reg}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="BestInProgress"
        component={Best_Prog}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="BestFinished"
        component={Best_Finished}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 10,
    left: 20,
    right: 20,
    borderRadius: 40,
    borderTopWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  tabBarItemStyle: {
    paddingVertical: 10,
    margin: 10,
    borderRadius: 40,
  },
  headerStyle: {
    borderBottomWidth: 0,
    shadowColor: "transparent",
    shadowOpacity: 0,
    elevation: 0,
  },
});
export default NavTab;
