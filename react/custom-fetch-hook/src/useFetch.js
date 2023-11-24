import { useEffect, useState } from "react";

export function useFetch(dataUrl) {
  const [state, setState] = useState({
    data: null,
    isLoading: false,
    isError: false,
    errorMsg: "",
  });

  // useEffect(() => {
  //   let mounted = true;
  //   async function getData() {
  //     setState((prev) => ({ ...prev, isLoading: true }));
  //     try {
  //       const res = await fetch(dataUrl);
  //       const response = await res.json();
  //       if (mounted) {
  //         setState((prev) => ({ ...prev, data: response }));
  //       }
  //     } catch (err) {
  //       if (mounted) {
  //         setState({
  //           ...state,
  //           isError: true,
  //           errorMsg: err || "Something went wrong",
  //         });
  //       }
  //       console.error(err);
  //     }
  //     mounted && setState((prev) => ({ ...prev, isLoading: false }));
  //   }

  //   getData();

  //   return () => {
  //     mounted = false;
  //   };
  // }, [dataUrl]);

  useEffect(() => {
    const abortController = new AbortController();
    async function getData() {
      setState((prev) => ({ ...prev, isLoading: true }));
      try {
        const res = await fetch(dataUrl, { signal: abortController.signal });
        const response = await res.json();
        setState((prev) => ({ ...prev, data: response }));
      } catch (err) {
        if (abortController.signal.aborted) {
          return;
        }
        setState({
          ...state,
          isError: true,
          errorMsg: err.toString() || "Something went wrong",
        });
        console.error(err);
      }
      setState((prev) => ({ ...prev, isLoading: false }));
    }

    getData();

    return () => {
      abortController.abort();
    };
  }, [dataUrl]);

  return state;
}
