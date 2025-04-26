import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const RADIUS = 50;

function App() {
  const [circleCoords, setCircleCoords] = useState([]);

  useEffect(() => {
    document.addEventListener("click", addCircle);

    return () => {
      document.removeEventListener("click", addCircle);
    };
  }, []);

  function addCircle(e) {
    const { clientX, clientY } = e;

    const newCircleCoords = {
      top: clientY - RADIUS,
      left: clientX - RADIUS,
      bottom: clientY + RADIUS,
      right: clientX + RADIUS,
      background: "red",
    };

    setCircleCoords((prev) => {
      for (let i = 0; i < prev.length; i++) {
        const collides = elementOverlap(newCircleCoords, prev[i]);
        if (collides) {
          newCircleCoords.background = "green";
          break;
        }
      }
      return [...prev, newCircleCoords];
    });
  }

  function elementOverlap(circle1, circle2) {
    const isColliding = !(
      circle1.top > circle2.bottom ||
      circle1.left > circle2.right ||
      circle1.bottom < circle2.top ||
      circle1.right < circle2.left
    );
    return isColliding;
  }

  const Circle = ({ top, left, background }) => (
    <div
      style={{
        position: "absolute",
        top: top,
        left: left,
        backgroundColor: background,
        width: RADIUS,
        height: RADIUS,
        borderRadius: "50%",
      }}
    />
  );

  return (
    <>
      <div className="App" style={{ position: "relative" }}>
        <p>Akarsh</p>
        {circleCoords.map((each) => (
          <Circle {...each} key={each.top + each.left + each.background} />
        ))}
      </div>
    </>
  );
}

export default App;
