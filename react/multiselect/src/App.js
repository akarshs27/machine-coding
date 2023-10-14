import "./App.css";
import { useState } from "react";
import Multiselect from "./Multiselect";

const options = [
  {
    name: "First",
    value: "First",
  },
  {
    name: "Two",
    value: "Two",
  },
  {
    name: "Three",
    value: "Three",
  },
  {
    name: "Four",
    value: "Four",
  },
  {
    name: "Five",
    value: "Five",
  },
];

function App() {
  const [selectedValues, setSelectedValues] = useState([]);

  return (
    <div className="App">
      <Multiselect
        value={selectedValues}
        options={options}
        onChange={(items) => setSelectedValues(items)}
      />
    </div>
  );
}

export default App;
