import { MutableRefObject, useEffect, useRef } from 'react';

export const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef<{ current?: () => void }>();

  useEffect(() => {
    (savedCallback as MutableRefObject<() => void>).current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      (savedCallback as MutableRefObject<() => void>).current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
