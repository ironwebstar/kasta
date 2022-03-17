import styled from 'styled-components/native';
import { Animated } from 'react-native';

import { COLORS } from '@styles/constants';

export const BarStyles = {
  Bar: styled.View<{
    width?: number | string;
    height?: number | string;
    bgColor?: string;
  }>`
    width: ${({ width }) => (typeof width === 'string' ? width : `${width}px`)};
    height: ${({ height }) =>
      typeof height === 'string' ? height : `${height}px`};
    background-color: ${({ bgColor }) => bgColor || COLORS.lightGrey};
    border-width: 0;
    border-radius: 9999px;
  `,
  Fill: styled(Animated.View)<{ color?: string }>`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: ${({ color }) => color || COLORS.primary};
    border-width: 0;
    border-radius: 9999px;
  `,
};
