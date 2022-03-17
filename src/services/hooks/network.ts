import { useState, useEffect, useMemo } from 'react';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';

let currentNet: NetInfoState;

NetInfo.fetch().then((state) => {
  currentNet = state;
});

export const useNetwork = () => {
  const [netInfo, setNetInfo] = useState(currentNet);
  const isConnected = useMemo(() => netInfo?.isConnected, [netInfo]);
  const isInternetReachable = useMemo(
    () => netInfo?.isInternetReachable,
    [netInfo]
  );

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(setNetInfo);

    return () => unsubscribe();
  }, []);

  return { netInfo, isConnected, isInternetReachable };
};
