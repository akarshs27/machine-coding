import { useCallback, useRef } from "react";

const useDebounce = (fn, delay, option = {leading: true, trailing: true}) => {
    let timeout = useRef(null);
    let isLeadingInvoked  = useRef(false);

    const debounce = useCallback((...args) => {
        let context = this;
        if(timeout.current) clearTimeout(timeout.current);
        if(option.leading && !timeout.current) {
            fn.apply(context, args);
            isLeadingInvoked.current = true;
        } else {
            isLeadingInvoked.current = false;
        }
        timeout.current = setTimeout(() => {
            if(option.trailing && !isLeadingInvoked.current) {
                fn.apply(context, args);
            }
        }, delay);
    },[fn, delay, option]);

    return debounce;
}

export default useDebounce;