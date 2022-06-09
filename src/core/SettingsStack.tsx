import  React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from '../screens/Settings';
import { useTranslation } from 'react-i18next';
const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  const { t } = useTranslation();
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" options={{
          title: t('Settings')}} component={Settings} />
    </SettingsStack.Navigator>
  );
}
export default SettingsStackScreen