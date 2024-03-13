import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../presentation/screens/home/HomeScreen';
import {SettingsScreen} from '../presentation/screens/settings/SettingsScreen';
import {ProfileScreen} from '../presentation/screens/profile/ProfileScreen';


const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Counter" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
