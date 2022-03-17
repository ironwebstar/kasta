import React, { FC } from 'react';
import { TextInputProps, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '@styles/constants';
import { InputStyles } from './input.styles';

interface IInputProps {
  label?: string;
  labelStyle?: TextStyle;
  style?: ViewStyle;
}

const Input: FC<IInputProps & TextInputProps> = ({
  label,
  labelStyle,
  style,
  ...others
}) => {
  return (
    <InputStyles.Wrapper style={style}>
      {label && (
        <InputStyles.Label
          fontFamily="varelaRound"
          color={COLORS.grey}
          style={labelStyle}
        >
          {label}
        </InputStyles.Label>
      )}
      <InputStyles.Input {...others} />
    </InputStyles.Wrapper>
  );
};

Input.defaultProps = {
  autoCorrect: false,
  autoCapitalize: 'none',
};

export default Input;
