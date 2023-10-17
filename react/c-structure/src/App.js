import { useState, useEffect } from "react";
import "./App.css";
import Box from "./Box";

const INITIAL_STATE = [
  {
    id: 1,
    isClicked: false,
    isVisible: true,
  },
  {
    id: 2,
    isClicked: false,
    isVisible: true,
  },
  {
    id: 3,
    isClicked: false,
    isVisible: true,
  },
  {
    id: 4,
    isClicked: false,
    isVisible: true,
  },
  {
    id: 5,
    isClicked: false,
    isVisible: false,
  },
  {
    id: 6,
    isClicked: false,
    isVisible: false,
  },
  {
    id: 7,
    isClicked: false,
    isVisible: true,
  },
  {
    id: 8,
    isClicked: false,
    isVisible: true,
  },
  {
    id: 9,
    isClicked: false,
    isVisible: true,
  },
];

function App() {
  const [queue, setQueue] = useState([]);
  const [grid, setGrid] = useState(INITIAL_STATE);

  function handleClicked(item) {
    grid.map((gridItem) => {
      if (!queue.includes(gridItem)) {
        if (gridItem.id === item.id) {
          return setQueue((prev) => [...prev, item]);
        }
      }
    });
    const temp = [...grid];
    const clickedItem = temp.find((each) => each.id === item.id);
    clickedItem.isClicked = true;
    return setGrid(temp);
  }

  useEffect(() => {
    let copyQueue = [...queue];
    let c = 0;

    if (queue.length === 7) {
      for (let i = 0; i < 7; i++) {
        let x = copyQueue.shift();
        c++;
        setTimeout(() => {
          const temp = [...grid];
          const clickedItem = temp.find((each) => each.id === x.id);
          clickedItem.isClicked = false;
          setGrid(temp);
        }, i * 1000);
      }
      if (c === 7) {
        setQueue([]);
      }
    }
  }, [queue]);

  return (
    <div className="App">
      <div className="box-wrapper">
        {grid?.map((each) => (
          <Box item={each} key={each.id} handleClicked={handleClicked} />
        ))}
      </div>
    </div>
  );
}

export default App;
