import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginPage from '../components/organism/LoginPage';
import ChangeLanguage from '../components/organism/ChangeLanguage';
const Routes = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen component={LoginPage} name="Login" />
      <Stack.Screen component={ChangeLanguage} name="Select Language" />
    </Stack.Navigator>
  );
};

export default Routes;
