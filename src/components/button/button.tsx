import React, {FC, useEffect, useRef} from 'react';
import {Animated, TouchableOpacityProps} from 'react-native';
import {COLORS} from '@styles/constants';
import {ButtonStyles} from './button.styles';
import Success from '@assets/success.svg';
import Default from '@assets/default.svg';
import Error from '@assets/error.svg';
import {TransactionProgress} from '@components/kasta-button/kasta-button';

interface IButtonProps {
  label?: string;
  color?: string;
  text?: boolean;
  textColor?: string;
  style?: TouchableOpacityProps;
  width?: number;
  height?: number;
  disabled?: boolean;
  status: string;
  progress: number;
  onPress?: (_: any) => void;
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
  progress,
  disabled,
  onPress,
}) => {
  let animation = useRef(new Animated.Value(0));
  const animationWidth = animation.current.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: progress,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  return (
    <ButtonStyles.Wrapper
      color={status === TransactionProgress.Loaded ? COLORS.default : color}
      text={text}
      style={style}
      onPress={onPress}
      disabled={disabled}
      width={width}
      height={height}>
      <ButtonStyles.Fill
        color={status === TransactionProgress.Loaded ? COLORS.loaded : color}
        style={{width: animationWidth}}
      />
      <ButtonStyles.Label
        fontFamily={text ? 'varelaRound' : 'arialBold'}
        color={textColor || COLORS.white}
        text={text}>
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
