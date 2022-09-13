import { useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useDebounceHook(value: any, delay: number | undefined) {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounceValue;
}
export default useDebounceHook;
