import './App.css';
import TrafficLight from './TrafficLight';

function App() {

  const trafficLight = {
    'red' : {
      backgroundColor: 'red',
      duration: 5000,
      next: 'yellow'
    },
    'yellow' : {
      backgroundColor: 'yellow',
      duration: 1000,
      next: 'green'
    },
    'green' : {
      backgroundColor: 'green',
      duration: 3000,
      next: 'red'
    }
  }
  return (
    <div className="App">
     <TrafficLight trafficLight={trafficLight}/>
    </div>
  );
}

export default App;
