import React, {useState} from 'react';
import {COLORS} from '@styles/constants';
import {STRINGS} from '@constants/strings';
import {SigninStyles} from './signin.styles';
import Bar from '@components/bar';
import KastaButton from '@components/kasta-button';

const Signin = () => {
  const [to, setTo] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [color, setColor] = useState<string>(COLORS.default);
  const [progress, setProgress] = useState<number>(0);

  return (
    <SigninStyles.Wrapper isCentered>
      <SigninStyles.Title>kasta</SigninStyles.Title>
      <SigninStyles.Input label={STRINGS.inputLabels.to} onChangeText={setTo} />
      <SigninStyles.Input
        label={STRINGS.inputLabels.amount}
        onChangeText={setAmount}
      />
      <Bar progress={progress} color={color} bgColor={COLORS.default} />
      <KastaButton
        to={to}
        amount={amount}
        updateProgress={setProgress}
        updateColor={setColor}
      />
    </SigninStyles.Wrapper>
  );
};

export default Signin;
