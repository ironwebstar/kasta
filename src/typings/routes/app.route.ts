import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigatorScreenParams } from '@react-navigation/core';

import { AuthStackParamList } from './auth.route';

export type AppStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
};

export type AuthNavigationProps = NativeStackNavigationProp<
  AppStackParamList,
  'Auth'
>;
