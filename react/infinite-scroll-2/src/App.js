import { useState, useRef } from "react";
import InfiniteScroll from "./InfiniteScroll";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const controllerRef = useRef(null);

  async function getData(query, pageNumber) {
    try {
      if (controllerRef.current) controllerRef.current.abort();
      controllerRef.current = new AbortController();
      const response = await fetch(
        "https://openlibrary.org/search.json?" +
          new URLSearchParams({
            q: query,
            page: pageNumber,
          }),
        { signal: controllerRef.current.signal }
      );
      const responseData = await response.json();
      setData((prev) => [...prev, ...responseData.docs]);
    } catch (err) {
      console.log(err);
    }
  }

  const renderItem = ({ title }, key, ref) => (
    <div key={key} ref={ref}>
      {title}
    </div>
  );

  return (
    <div className="App">
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <InfiniteScroll
        renderListItem={renderItem}
        getData={getData}
        listItem={data}
        query={query}
      />
    </div>
  );
}

export default App;
