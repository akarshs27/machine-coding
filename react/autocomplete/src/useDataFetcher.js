import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

export function useDataFetcher(query, debounceWait, autoComplete) {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function getData() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://swapi.dev/api/people/?search=${query}`
      );
      const responseData = await response.json();
      console.log("responseData", responseData.results);
      setData(responseData.results);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  }

  const debounce = useDebounce(getData, debounceWait);

  useEffect(() => {
    if (query.length === 0 || !autoComplete) {
      setData(null);
      setError("");
      return;
    }
    debounce();
  }, [query]);

  return {
    data,
    error,
    loading,
  };
}
