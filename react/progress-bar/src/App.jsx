import { useEffect, useState } from "react";
import "./App.css";

export const ProgressBar = ({ progress }) => {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentProgress(progress);
    }, [200]);

    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="outer-bar">
      <div
        className="inner-bar"
        style={{
          transform: `translateX(-${100 - currentProgress}%)`,
        }}
      >
        {currentProgress}%
      </div>
    </div>
  );
};

function App() {
  const BARS = [5, 20, 50, 80, 100];
  return (
    <>
      <p>Progress bar</p>
      {BARS.map((each) => (
        <ProgressBar progress={each} key={each} />
      ))}
    </>
  );
}

export default App;
