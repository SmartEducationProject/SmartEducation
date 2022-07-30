import { useEffect, useState } from 'react';

function useDebounceHook(value: any, delay: number | undefined) {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    let timer = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounceValue;
}
export default useDebounceHook;
