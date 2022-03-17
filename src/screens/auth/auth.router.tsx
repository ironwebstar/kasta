import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Signin from './signin';
import {AuthStackParamList} from '@typings/routes';

const Stack = createStackNavigator<AuthStackParamList>();

const authRouter = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Signin" component={Signin} />
    </Stack.Navigator>
  );
};

export default authRouter;
