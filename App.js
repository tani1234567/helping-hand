import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Drawer from "./pages/Drawer";
import Best from "./pages/Best/Best_Reg";
import NavTab from "./pages/Best/Navigator";


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen
          name="Root"
          component={Drawer}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="BestHome" component={Best} />
        <Stack.Screen name="Best" component={NavTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
