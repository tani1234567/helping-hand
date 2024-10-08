import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardScreen from "./Dashboard";
import SettingScreen from "./Settings";
import HomeScreen from "./Home";
import Complaint from "./Best/BestCom";

const DrawerScreen = createDrawerNavigator();

export default function Drawer() {
  return (
    <DrawerScreen.Navigator>
      <DrawerScreen.Screen name="Home" component={HomeScreen} />
      <DrawerScreen.Screen name="Dashboard" component={DashboardScreen} />
      <DrawerScreen.Screen name="Setting" component={SettingScreen} />
      <DrawerScreen.Screen name="Complaint" component={Complaint} />
    </DrawerScreen.Navigator>
  );
}
