import React, { FC, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

import http from '@services/api/http';

global.Buffer = global.Buffer || require('buffer').Buffer;

export const AppService: FC = ({ children }) => {
  const barStyle = 'default';

  useEffect(() => {
    SplashScreen.hide();
    http.init();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={barStyle} />
      {children}
    </SafeAreaProvider>
  );
};
