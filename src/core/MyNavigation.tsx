import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAdd, faCogs, faEdit, faSave, faTrash, faUndo, faUsers } from '@fortawesome/free-solid-svg-icons';
import SettingsStackScreen from './SettingsStack';
import UserListStackScreen from './UsersListStack';
import { useTranslation } from 'react-i18next';
export default function MyNavigation() {
  const { t } = useTranslation();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer >
      <Tab.Navigator
        backBehavior="firstRoute"
      
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            if (route.name == "UsersList") {
              return (
                <FontAwesomeIcon size={20} style={{ color: focused ? "white" : "gray" }} icon={faUsers} />
              )
            } else if (route.name == "Settings") {
              return (
                <FontAwesomeIcon size={20} style={{ color: focused ? "white" : "gray" }} icon={faEdit} />
              )
            };
          },
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'white',
          tabBarStyle: { backgroundColor: "#141414" },
          headerShown: false
        })}
      >
        <Tab.Screen name="UsersList" options={{title: t('Users')}} component={UserListStackScreen} />
        <Tab.Screen name="Settings" options={{title: t('Settings')}} component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}