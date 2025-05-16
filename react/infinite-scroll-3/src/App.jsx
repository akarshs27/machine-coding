import { useState } from "react";

import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [listData, setListData] = useState([]);
  const [page, setPage] = useState(1);

  const debouncedQuery = useDebounce(query, 500);

  async function getData(query, pageNumber) {
    try {
      const res = await fetch(
        "https://openlibrary.org/search.json?" +
          new URLSearchParams({
            q: query,
            page: pageNumber,
          })
      );
      const data = await res.json();
      setListData((prev) => [...prev, ...data.docs]);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    setListData([]);
    setPage(1);
  }, [debouncedQuery]);

  console.log("data", listData);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div>
        {listData.map((book, i) => (
          <div key={i}>{book.title}</div>
        ))}
      </div>
      <InfiniteScroll
        getData={getData}
        query={debouncedQuery}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

export default App;
