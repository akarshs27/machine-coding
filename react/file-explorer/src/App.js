import './App.css';
import Folder from "./Folder";
import { explorer } from './constants';

function App() {
  return (
    <div className="App">
     <Folder explorer={explorer}/>
    </div>
  );
}

export default App;
