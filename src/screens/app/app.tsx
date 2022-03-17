import 'react-native-gesture-handler';

import React, { FC } from 'react';

import { AppNavigator } from './app.navigator';
import { AppRouter } from './app.router';
import { AppService } from './app.service';
import { Theme } from '@styles/theme';

export const App: FC = () => (
  <Theme.Screen>
    <AppNavigator>
      <AppService>
        <AppRouter />
      </AppService>
    </AppNavigator>
  </Theme.Screen>
);
