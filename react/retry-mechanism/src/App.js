import { useState } from 'react';
import './App.css';
import { apiCall, retry } from './utils';

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  async function handleApiCall() {
    setLoading(true);
    const res = await retry(apiCall);
    if(res) {
      setLoading(false);
      setData('API call successfull');
    }
  }

  return (
    <div className="App">
   <p>Retry mechanism</p>
      {loading ? (
        <p>Loading</p>
      ) : (
        <>
        <p>{data}</p>
        <button onClick={handleApiCall}>Make API call</button>
        </>
      )}
    </div>
  );
}

export default App;
