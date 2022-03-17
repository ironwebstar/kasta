import React, { FC } from 'react';
import { TouchableOpacityProps, View } from 'react-native';
import { COLORS } from '@styles/constants';
import { ButtonStyles } from './button.styles';
import Success from '@assets/success.svg';
import Default from '@assets/default.svg';
import Error from '@assets/error.svg';
import { TransactionProgress } from '@components/kasta-button/kasta-button';
interface IButtonProps {
  label?: string;
  color?: string;
  text?: boolean;
  textColor?: string;
  style?: TouchableOpacityProps;
  width?: number;
  height?: number;
  onPress?: (_: any) => void;
  disabled?: boolean;
  status: string;
}

const Button: FC<IButtonProps> = ({
  label,
  color,
  text,
  textColor,
  style,
  width,
  height,
  status,
  disabled = false,
  onPress,
}) => {
  return (
    <ButtonStyles.Wrapper
      color={color}
      text={text}
      style={style}
      onPress={onPress}
      disabled={disabled}
      width={width}
      height={height}
    >
      <ButtonStyles.Label
        fontFamily={text ? 'varelaRound' : 'arialBold'}
        color={textColor || COLORS.white}
        text={text}
      >
        {label}
      </ButtonStyles.Label>
      <ButtonStyles.StyledView>
        {status === TransactionProgress.Default && (
          <Default width={14} height={24} />
        )}
        {status === TransactionProgress.Loaded && <Default />}
        {status === TransactionProgress.Success && <Success />}
        {status === TransactionProgress.Error && <Error />}
      </ButtonStyles.StyledView>
    </ButtonStyles.Wrapper>
  );
};

export default Button;
