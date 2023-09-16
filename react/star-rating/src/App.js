import StarRating from './StarRating';
import './App.css';


function App() {
  return (
    <div className="App">
     <StarRating stars={5} defaultRating={2}/>
    </div>
  );
}

export default App;
