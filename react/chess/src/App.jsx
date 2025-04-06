import { useState } from "react";
import "./App.css";

const BOARD_SIZE = 8;

function App() {
  const [hoveredSquare, setHoveredSquare] = useState(null);

  const boardGrid = Array(BOARD_SIZE)
    .fill("")
    .map(() => Array(BOARD_SIZE).fill(""));

  function handleMouseEnter(row, col) {
    setHoveredSquare([row, col]);
  }

  function handleMouseLeave() {
    setHoveredSquare(null);
  }

  function getBackgroundColor(rowIndex, colIndex) {
    if (!hoveredSquare) return "";

    const [hoverRow, hoverColumn] = hoveredSquare;

    if (rowIndex === hoverRow && colIndex === hoverColumn) return "aqua";

    if (Math.abs(rowIndex - hoverRow) === Math.abs(colIndex - hoverColumn))
      return "blue";
  }

  return (
    <div className="App">
      <div className="chessboard">
        {boardGrid.map((row, rowIndex) =>
          row.map((_, colIndex) => {
            const isDark = (rowIndex + colIndex) % 2 === 1;
            return (
              <div
                key={`${rowIndex} - ${colIndex}`}
                className={`cell ${isDark ? "dark" : "light"}`}
                style={{
                  backgroundColor: getBackgroundColor(rowIndex, colIndex),
                }}
                onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
                onMouseLeave={handleMouseLeave}
              >
                {rowIndex} {colIndex}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;
