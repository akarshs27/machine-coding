import './App.css';
import useDebounce from './useDebounce';

function App() {

  function onChange(event) {
    console.log(event.target.value);
  }

  const debounceSearch = useDebounce(onChange, 500);
  return (
    <div className="App">
     <input type='search' onChange={debounceSearch} placeholder='Enter'/>
    </div>
  );
}

export default App;
