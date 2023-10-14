import { useCallback, useEffect, useRef, useState } from "react";

const InfiniteScroll = ({ renderListItem, getData, listItem, query }) => {
  const pageNumberRef = useRef(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef(null);

  const lastObserverRef = (node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        pageNumberRef.current = pageNumberRef.current + 1;
        fetchData();
      }
    });
    if (node) {
      observer.current.observe(node);
    }
  };

  const renderList = () => {
    return listItem.map((each, index) => {
      if (index === listItem.length - 1) {
        return renderListItem(each, index, lastObserverRef);
      }
      return renderListItem(each, index, null);
    });
  };

  const fetchData = useCallback(() => {
    setLoading(true);
    getData(query, pageNumberRef.current).finally(() => {
      setLoading(false);
    });
  }, [query]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      {renderList()}
      <div>{loading && <>Loading</>}</div>
    </>
  );
};

export default InfiniteScroll;
