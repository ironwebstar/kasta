import React, { useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import authRouter from '@screens/auth';
import { AppStackParamList } from '@typings/routes';

const Stack = createStackNavigator<AppStackParamList>();

export const AppRouter = () => {
  const stack = (
    <Stack.Screen
      name="Auth"
      component={authRouter}
      options={{ headerShown: false }}
    />
  );

  return <Stack.Navigator>{stack}</Stack.Navigator>;
};
