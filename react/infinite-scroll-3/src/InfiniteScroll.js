import { useEffect, useRef } from "react";

const InfiniteScroll = ({ getData, query, page, setPage }) => {
  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + document.documentElement.scrollTop + 100 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    }

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    getData(query, page);
  }, [query, page]);

  return null;
};

export default InfiniteScroll;
