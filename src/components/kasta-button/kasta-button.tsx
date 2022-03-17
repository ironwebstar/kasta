import React, {useEffect, useState} from 'react';
import {COLORS} from '@styles/constants';
import {STRINGS} from '@constants/strings';
import {createPayment, getPayment} from '@services/api/auth';
import {useInterval} from '@services/hooks/interval';
import {Styles} from './kasta-button.styles';
import {Alert} from 'react-native';
import {useNetwork} from '@services/hooks/network';

export enum TransactionProgress {
  Default = 'default',
  Loaded = 'loaded',
  Success = 'success',
  Error = 'error',
}

interface KastaButtonProps {
  to: string;
  amount: string | number;
  updateProgress?: (progress: number) => void;
  updateColor?: (color: string) => void;
}

const RESPONSE_TIMEOUT = 15;
const PROGRESS_INTERVAL = 1000;
const SUCCESS_PROGRESS = 100;
const INITIAL_PROGRESS = 5; // For visual effect

const KastaButton: React.FC<KastaButtonProps> = ({
  to,
  amount,
  updateProgress,
  updateColor,
}) => {
  const {isConnected, isInternetReachable} = useNetwork();
  const [paymentId, setPaymentId] = useState<string>('');
  const [paymentStatus, setStatus] = useState<string>(
    TransactionProgress.Default,
  );
  const [progress, setProgress] = useState<number>(0);
  const [color, setColor] = useState<string>(COLORS.default);
  const [label, setLabel] = useState<string>(STRINGS.actions.submit);
  const [timer, setTimer] = useState<number>(0);
  const [delay, setDelay] = useState<number | null>(null);

  const checkProgress = async () => {
    if (paymentId) {
      const transactionProgress = await getPaymentProgress(paymentId);
      setTimer(timer + 1);
      setProgress(transactionProgress + INITIAL_PROGRESS);
      if (transactionProgress >= SUCCESS_PROGRESS) {
        setStatus(TransactionProgress.Success);
        setTimer(0);
        setDelay(null);
      } else {
        if (timer > RESPONSE_TIMEOUT) {
          setStatus(TransactionProgress.Error);
          setTimer(0);
          setDelay(null);
        }
      }
    }
  };
  // Check payment progress every 1s
  useInterval(checkProgress, delay);

  const handleSubmit = async () => {
    if (!isConnected) {
      Alert.alert('Error', 'Network is down');
      return;
    }
    if (!to || !amount) {
      Alert.alert('Error', 'Need to Input To | Amount');
      return;
    }
    const {id} = await createPayment({to, amount: Number(amount)});
    if (id) {
      setStatus(TransactionProgress.Loaded);
      setProgress(INITIAL_PROGRESS);
      setPaymentId(id);
      setDelay(PROGRESS_INTERVAL);
    }
  };

  const getPaymentProgress = async (paymentId: string) => {
    const {progress} = await getPayment({id: paymentId});
    return progress;
  };

  useEffect(() => {
    if (isConnected === undefined || isInternetReachable === undefined) {
      return;
    }
    if (isConnected === null || isInternetReachable === null) {
      return;
    }
    if (!(isConnected && isInternetReachable)) {
      Alert.alert('Error', 'Network is down');
      setStatus(TransactionProgress.Error);
      setTimer(0);
      setDelay(null);
    }
  }, [isConnected, isInternetReachable]);

  useEffect(() => {
    switch (paymentStatus) {
      case TransactionProgress.Default:
        setLabel(STRINGS.actions.submit);
        setColor(COLORS.default);
        break;

      case TransactionProgress.Loaded:
        setLabel(STRINGS.actions.submit);
        setColor(COLORS.loaded);
        break;

      case TransactionProgress.Error:
        setLabel(STRINGS.actions.error);
        setColor(COLORS.error);
        break;

      case TransactionProgress.Success:
        setLabel(STRINGS.actions.success);
        setColor(COLORS.success);
        break;
    }
  }, [paymentStatus]);

  useEffect(() => {
    if (updateProgress) {
      updateProgress(progress);
    }
    if (updateColor) {
      updateColor(color);
    }
  }, [progress, color]);

  return (
    <>
      <Styles.KastaButton
        label={label}
        color={color}
        onPress={handleSubmit}
        width={213}
        height={60}
        disabled={paymentStatus === TransactionProgress.Loaded}
        status={paymentStatus}
      />
    </>
  );
};

export default KastaButton;
