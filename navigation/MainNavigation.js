// Import the createStackNavigator function from the @react-navigation/stack package
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

// Import the Home and Profile components from their respective files
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';

// Import the Routes object from the Routes file
import {Routes} from './Routes';

// Create a Stack variable using the createStackNavigator function
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MainMenuNavigation = () => {
  return(
    <Drawer.Navigator>
        <Drawer.Screen name={Routes.Home} component={Home} />
        <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
}
// Define the MainNavigation component
const MainNavigation = () => {
  // Return the navigation structure for the app
  return (
    <Stack.Navigator
      // Set the initial route to the Home screen
      initialRouteName={Routes.Home}
      // Hide the header for all screens
      screenOptions={{header: () => null, headerShown: false}}>
      {/* Define the Home screen */}
      <Stack.Screen name={"Drawer"} component={MainMenuNavigation} />
      {/* Define the Profile screen */}

    </Stack.Navigator>
  );
};

// Export the MainNavigation component as the default export of this file
export default MainNavigation;