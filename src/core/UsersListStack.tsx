 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserDetail from '../screens/UserDetail';
import UsersList from '../screens/UsersList';
import  React from 'react';
import { useTranslation } from 'react-i18next';

const UserListStack = createNativeStackNavigator();
function UserListStackScreen() {
  const { t } = useTranslation();
  return (
    <UserListStack.Navigator>
      <UserListStack.Screen name="Home" component={UsersList} options={{headerShown: false}} />
      <UserListStack.Screen name="UserDetail" options={{
          title: t('UserDetail'),headerBackTitleVisible: false }}  component={UserDetail}  />
    </UserListStack.Navigator>
  );
}
export default UserListStackScreen;