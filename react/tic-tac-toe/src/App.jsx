import "./styles.css";
import { useState } from "react";

const WINNERS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// .board {
//   display: grid;
//   grid-template-columns: repeat(3, 60px);
//   grid-template-rows: repeat(3, 60px);
//   margin-top: 32px;
// }

// .cell {
//   border: 1px solid lightgrey;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
//   background-color: white;
//   color: black;
// }

export default function App() {
  const initialBoard = () => Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(false);

  function handleCellClick(index) {
    checkWinner(board);
    const newBoard = [...board];
    newBoard[index] = isXNext ? "O" : "X";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  }

  function handleResetGame() {
    setBoard(initialBoard);
    setIsXNext(false);
  }

  function checkWinner(currentBoard) {
    for (let i = 0; i < WINNERS.length; i++) {
      const [a, b, c] = WINNERS[i];
      if (
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  }

  function showMessage() {
    const winner = checkWinner(board);
    if (winner) return `Player ${winner} wins`;
    if (!board.includes(null)) return `It's a draw`;
    return `Player ${!isXNext ? "X" : "O"} turn`;
  }

  return (
    <div>
      <p>{showMessage()}</p>
      <button onClick={handleResetGame}>Reset Game</button>

      <div className="board">
        {board.map((each, index) => (
          <button
            key={index}
            className="cell"
            onClick={() => handleCellClick(index)}
            disabled={each !== null}
          >
            {each}
          </button>
        ))}
      </div>
    </div>
  );
}
