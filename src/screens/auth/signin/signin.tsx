import React, {useState} from 'react';
import {STRINGS} from '@constants/strings';
import {SigninStyles} from './signin.styles';
import KastaButton from '@components/kasta-button';

const Signin = () => {
  const [to, setTo] = useState<string>('');
  const [amount, setAmount] = useState<string>('');

  return (
    <SigninStyles.Wrapper isCentered>
      <SigninStyles.Title>kasta</SigninStyles.Title>
      <SigninStyles.Input label={STRINGS.inputLabels.to} onChangeText={setTo} />
      <SigninStyles.Input
        label={STRINGS.inputLabels.amount}
        onChangeText={setAmount}
      />
      <KastaButton to={to} amount={amount} isSuccessCase />
      <KastaButton to={to} amount={amount} isSuccessCase={false} />
    </SigninStyles.Wrapper>
  );
};

export default Signin;
