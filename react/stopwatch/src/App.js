import { useRef, useState } from 'react';
import './App.css';

function App() {

  const [ time, setTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setTime(Date.now());
    setCurrentTime(Date.now());
    intervalRef.current = setInterval(() => {
       setTime(Date.now());
    },10)
  }

  function handleStop() {
      clearInterval(intervalRef.current);
  }

  function handleReset() {
    setTime(null);
    setCurrentTime(null);
  }

  const stopWatchTime = (time - currentTime)/1000;

  return (
    <div className="App">
     <h2>Stopwatch: {stopWatchTime.toFixed(3)}</h2>
     <div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
     </div>
    </div>
  );
}

export default App;
