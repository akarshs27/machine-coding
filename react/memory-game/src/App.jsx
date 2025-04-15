import "./styles.css";
import { useEffect, useState } from "react";

// .container {
//   padding: 40px;
// }

// .board {
//   display: grid;
//   grid-template-columns: repeat(var(--gridSize), 60px);
//   grid-template-rows: repeat(var(--gridSize), 60px);
//   margin-top: 24px;
//   gap: 2px;
//   margin-bottom: 24px;
// }

// .cell {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border: 1px solid black;
//   border-radius: 4px;
//   background-color: lightgrey;
//   cursor: pointer;
// }

// .flipped {
//   background-color: lightblue;
// }

// .solved {
//   background-color: lightgreen;
// }

export default function App() {
  const [boardSize, setBoardSize] = useState(4);
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [won, setWon] = useState(false);

  function initializeGame() {
    const totalCards = boardSize * boardSize;
    const pairCount = Math.floor(totalCards / 2);
    const numbers = [...Array(pairCount).keys()].map((e) => e + 1);
    const shuffledCards = [...numbers, ...numbers]
      .sort(() => Math.random() - 0.5)
      .map((number, index) => ({ id: index, number }));
    console.log("shuffledCards", shuffledCards);
    setCards(shuffledCards);
    setFlippedCards([]);
    setSolved([]);
    setWon(false);
  }

  function checkMatchOfFlippedCard(secondCardId) {
    const [firstCardId] = flippedCards;
    if (cards[firstCardId].number === cards[secondCardId].number) {
      setSolved([...solved, firstCardId, secondCardId]);
      setFlippedCards([]);
      setDisabled(false);
    } else {
      setTimeout(() => {
        setFlippedCards([]);
        setDisabled(false);
      }, [1000]);
    }
  }

  function handleClick(id) {
    if (disabled || won) return;

    if (flippedCards.length === 0) {
      setFlippedCards([id]);
      return;
    }

    if (flippedCards.length === 1) {
      setDisabled(true);
      if (id !== flippedCards[0]) {
        setFlippedCards([...flippedCards, id]);
        checkMatchOfFlippedCard(id);
      } else {
        setFlippedCards([]);
        setDisabled(false);
      }
    }
  }

  const isFlipped = (id) => flippedCards.includes(id) || solved.includes(id);
  const isSolved = (id) => solved.includes(id);

  useEffect(() => {
    initializeGame();
  }, [boardSize]);

  useEffect(() => {
    if (solved.length === cards.length && cards.length > 0) {
      setWon(true);
    }
  }, [solved, cards]);

  return (
    <div className="container">
      <p>Memory Game</p>
      <div>
        <span>Size:</span>
        <input
          type="number"
          min="2"
          max="10"
          value={boardSize}
          onChange={(e) => setBoardSize(e.target.value)}
        />
      </div>

      {won && <p>You won !</p>}

      <div className="board" style={{ "--gridSize": boardSize }}>
        {cards.map((each) => (
          <div
            className={`cell ${
              isFlipped(each.id)
                ? isSolved(each.id)
                  ? "solved"
                  : "flipped"
                : ""
            }`}
            key={each.id}
            onClick={() => handleClick(each.id)}
          >
            {isFlipped(each.id) ? each.number : "?"}
          </div>
        ))}
      </div>
      <button onClick={initializeGame}>{won ? "Play again" : "Reset"}</button>
    </div>
  );
}
