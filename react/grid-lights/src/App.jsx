import { useState } from "react";
import "./App.css";

export default function App() {
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const [order, setOrder] = useState([]);

  console.log("order", order);

  function deactivateCell() {
    console.log("Start deactivateCell");
    const timer = setInterval(() => {
      setOrder((originOrder) => {
        const newOrder = [...originOrder];
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
        }

        return newOrder;
      });
    }, 300);
  }

  function handleCellClick(cell) {
    const newOrder = [...order, cell];
    setOrder(newOrder);

    if (newOrder.length == config.flat(1).filter(Boolean).length) {
      deactivateCell();
    }
  }

  return (
    <div className="App">
      {config.flat(1).map((value, index) => {
        return Boolean(value) ? (
          <button
            className={order.includes(index) ? "cell filled" : "cell"}
            key={index}
            disabled={order.includes(index)}
            onClick={() => handleCellClick(index)}
          >
            {" "}
            {index}
          </button>
        ) : (
          <span className="empty-cell" />
        );
      })}
    </div>
  );
}
