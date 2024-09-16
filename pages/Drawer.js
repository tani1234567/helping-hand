import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardScreen from "./Dashboard";
import SettingScreen from "./Settings";
import HomeScreen from "./Home";

const DrawerScreen = createDrawerNavigator();

export default function Drawer() {
  return (
    <DrawerScreen.Navigator>
      <DrawerScreen.Screen name="Home" component={HomeScreen} />
      <DrawerScreen.Screen name="Dasboard" component={DashboardScreen} />
      <DrawerScreen.Screen name="Setting" component={SettingScreen} />
    </DrawerScreen.Navigator>
  );
}
