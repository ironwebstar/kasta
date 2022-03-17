import styled from 'styled-components/native';

import { Theme } from '@styles/theme';
import { COLORS } from '@styles/constants';

export const ButtonStyles = {
  Wrapper: styled.TouchableOpacity<{
    color?: string;
    text?: boolean;
    width?: number;
    height?: number;
  }>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: ${({ text }) => (text ? 'auto' : '100%')};
    background-color: ${({ color, text }) =>
      (text ? COLORS.transparent : color) || COLORS.transparent};
    padding-top: ${({ text }) => (text ? 0 : 10)}px;
    padding-bottom: ${({ text }) => (text ? 0 : 10)}px;
    padding-left: 5px;
    padding-right: 5px;
    margin-bottom: 5px;
    border-radius: 5px;
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
  `,

  Label: styled(Theme.Text)<{ text?: boolean }>`
    text-align: center;
    display: flex;
    align-items: center;
    text-transform: ${({ text }) => (text ? 'none' : 'uppercase')};
    font-size: 24px;
  `,

  StyledView: styled.View`
    padding-left: 14px;
  `,
};
