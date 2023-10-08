import Autocomplete from "./Autocomplete";
import ListBox from "./ListBox";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Autocomplete
        label="Search name"
        placeholder="Enter text"
        id="firstname"
        name="firstname"
        debounceWait="3000"
        autoComplete
        styles={{
          label: "label",
          input: "input",
        }}
        listBox={(items) => <ListBox items={items} />}
        noItemMessage={() => <div>Sorry no person found</div>}
        errorMessage={() => <div>Something went wrong</div>}
      />
    </div>
  );
}

export default App;
