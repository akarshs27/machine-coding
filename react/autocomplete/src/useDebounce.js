import { useCallback, useRef } from "react";

export function useDebounce(fn, debounceWait = 5000) {
  let timerRef = useRef(null);

  const debounce = useCallback(
    (...args) => {
      let context = this;
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        fn.apply(context, args);
      }, [debounceWait]);
    },
    [fn, debounceWait]
  );

  return debounce;
}
