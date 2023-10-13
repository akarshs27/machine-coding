import { useEffect, useRef, useState } from "react";

const InfiniteScroll = ({ renderListItem, getData, listItem, query }) => {
  const pageNumberRef = useRef(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getData(query, pageNumberRef.current).finally(() => {
      setLoading(false);
    });
  }, [query]);

  return (
    <div>
      <p>InfiniteScroll</p>
    </div>
  );
};

export default InfiniteScroll;
