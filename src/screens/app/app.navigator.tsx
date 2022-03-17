import React, { FC, MutableRefObject, useEffect, createRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';

export const isMountedRef = createRef<{ current?: boolean }>();
export const navigationRef = createRef<any>();

export const AppNavigator: FC = ({ children }) => {
  useEffect(() => {
    (isMountedRef as MutableRefObject<boolean>).current = true;

    return () => {
      (isMountedRef as MutableRefObject<boolean>).current = false;
    };
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>{children}</NavigationContainer>
  );
};
