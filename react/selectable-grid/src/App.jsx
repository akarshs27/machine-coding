import { useState } from "react";

import "./App.css";

// .grid {
//   display: grid;
//   grid-template-columns: repeat(var(--rows), 32px);
//   grid-template-rows: repeat(var(--cols), 32px);
//   gap: 4px;
//   user-select: none;
// }

// .cell {
//   height: 32px;
//   width: 32px;
//   border: 1px solid lightgrey;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .selected {
//   background-color: lightblue;
// }

const SelectableGrid = ({ rows = 10, cols = 10 }) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [selectedBoxes, setSelectedBoxes] = useState([]);

  console.log("selectedBoxes", selectedBoxes);

  function handleMouseDown(boxNumber) {
    console.log("mouse down", boxNumber);
    setIsMouseDown(true);
    setSelectedBoxes([boxNumber]);
  }

  function handleMouseUp(index) {
    console.log("mouse up", index);
    setIsMouseDown(false);
    setSelectedBoxes;
  }

  function handleMouseEnter(boxNumber) {
    console.log("mouse enter", boxNumber);
    if (isMouseDown) {
      const startBox = selectedBoxes[0];
      const endBox = boxNumber;

      const startRow = Math.floor((startBox - 1) / cols);
      const startCol = (startBox - 1) % cols;
      const endRow = Math.floor((endBox - 1) / cols);
      const endCol = (endBox - 1) % cols;

      const minRow = Math.min(startRow, endRow);
      const maxRow = Math.max(startRow, endRow);
      const minCol = Math.min(startCol, endCol);
      const maxCol = Math.max(startCol, endCol);

      const selected = [];
      for (let row = minRow; row <= maxRow; row++) {
        for (let col = minCol; col <= maxCol; col++) {
          selected.push(row * cols + col + 1);
        }
      }

      setSelectedBoxes(selected);

      console.log("selected", selected);
    }
  }

  return (
    <div className="grid" style={{ "--rows": rows, "--cols": cols }}>
      {[...Array(rows * cols).keys()].map((each, index) => (
        <div
          key={index}
          className={`cell ${
            selectedBoxes.includes(index + 1) ? "selected" : ""
          }`}
          onMouseDown={() => handleMouseDown(index + 1)}
          onMouseUp={() => handleMouseUp(index + 1)}
          onMouseEnter={() => handleMouseEnter(index + 1)}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <>
      <SelectableGrid rows={10} cols={10} />;
    </>
  );
}

export default App;
