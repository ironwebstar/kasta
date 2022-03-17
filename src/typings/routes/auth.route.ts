import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { NavigatorScreenParams } from '@react-navigation/core';

import { AppStackParamList } from './app.route';

export type AuthStackParamList = {
  Signin: undefined;
};

export type SigninScreenProp = CompositeScreenProps<
  StackScreenProps<AuthStackParamList, 'Signin'>,
  StackScreenProps<AppStackParamList>
>;

export type SigninScreenNavigationProp = SigninScreenProp['navigation'];

export type SigninScreenRouteProp = SigninScreenProp['route'];
