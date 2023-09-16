import { useCallback, useRef } from "react";

 const useDebounce = (fn, delay) => {
    const timerRef = useRef(null);

    const debounce = useCallback((...args) => {
        let context = this;
        if(timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            fn.apply(context, args);
        },[delay]);
    },[fn, delay])

    return debounce;
}

export default useDebounce;

