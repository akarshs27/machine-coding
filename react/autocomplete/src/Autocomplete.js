import { useState } from "react";
import { useDataFetcher } from "./useDataFetcher";
import "./App.css";

const Autocomplete = ({
  label,
  placeholder,
  id,
  name,
  debounceWait,
  autoComplete,
  styles,
  noItemMessage,
  errorMessage,
  listBox,
}) => {
  const [query, setQuery] = useState("");
  const { data, error } = useDataFetcher(query, debounceWait, autoComplete);

  return (
    <div className="wrapper">
      <label className={styles.label}>{label}</label>
      <input
        type="text"
        value={query}
        id={id}
        placeholder={placeholder}
        name={name}
        onChange={(event) => setQuery(event.target.value)}
        className={styles.input}
      />
      {data && data.length > 0 && listBox(data)}
      {query && data && data.length === 0 && noItemMessage()}
      {error && errorMessage()}
    </div>
  );
};

export default Autocomplete;
