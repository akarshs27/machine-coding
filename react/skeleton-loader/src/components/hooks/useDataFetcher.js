import { useEffect, useState } from "react";

export function useDataFetcher(url) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getData() {
      try {
        const response = await fetch(url);
        const shoppingData = await response.json();
        setData(shoppingData);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    }

    const timerId = setTimeout(() => {
      getData();
    }, 10000);

    return () => {
      clearTimeout(timerId);
    };
  }, [url]);

  return {
    data,
    isLoading,
  };
}
