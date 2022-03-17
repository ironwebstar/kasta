import React, { FC, useEffect, useRef } from 'react';
import { Animated } from 'react-native';

import { COLORS } from '@styles/constants';

import { BarStyles } from './bar.styles';

interface IBarProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  bgColor?: string;
  progress: number;
}

const Bar: FC<IBarProps> = ({ color, progress, ...others }) => {
  let animation = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: progress,
      duration: 50,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const width = animation.current.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  return (
    <BarStyles.Bar {...others}>
      <BarStyles.Fill color={color} style={{ width }} />
    </BarStyles.Bar>
  );
};

Bar.defaultProps = {
  width: '100%',
  height: 10,
  color: COLORS.primary,
  bgColor: COLORS.lightGrey,
};

export default Bar;
