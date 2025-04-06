import { useState } from "react";
import "./App.css";

const LEFT_ARR = ["one", "two", "three", "four"];
const RIGHT_ARR = ["a", "b", "c", "d"];

function makeObject(arr) {
  const obj = {};
  for (let key of arr) {
    obj[key] = false;
  }
  return obj;

  // {
  //   "one": false,
  //   "two": false,
  //   "three": false,
  //   "four": false
  // }
}

const ItemsList = ({ items, setItems }) => {
  return (
    <div>
      <ul>
        {Object.entries(items).map(([label, checked]) => (
          <li>
            <input
              type="checkbox"
              checked={checked}
              id={label}
              onChange={() =>
                setItems((prev) => ({
                  ...prev,
                  [label]: !prev[label],
                }))
              }
            />
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  const [leftArr, setLeftArr] = useState(makeObject(LEFT_ARR));
  const [rightArr, setRightArr] = useState(makeObject(RIGHT_ARR));

  function getFilteredItem(list) {
    let trueValues = {};
    let falseValues = {};
    for (const key in list) {
      if (list[key]) {
        trueValues[key] = true;
      } else {
        falseValues[key] = false;
      }
    }

    return [trueValues, falseValues];
  }

  function transferAll(srcList, setSrcList, destList, setDestList) {
    setDestList((prev) => ({
      ...prev,
      ...srcList,
    }));
    setSrcList({});
  }

  function transferSelectedList(srcList, setSrcList, destList, setDestList) {
    const sourceList = { ...srcList };
    const [selectedInSrcList, nonSelectedInSrcList] =
      getFilteredItem(sourceList);

    setDestList((prev) => ({
      ...prev,
      ...selectedInSrcList,
    }));

    setSrcList(nonSelectedInSrcList);
  }

  return (
    <div className="new">
      {/* Left list */}
      <ItemsList items={leftArr} setItems={setLeftArr} />
      {/* Buttons */}
      <div className="button-list">
        <button
          aria-label="Transfer all from left to right"
          onClick={() =>
            transferAll(leftArr, setLeftArr, rightArr, setRightArr)
          }
        >
          {">>"}
        </button>
        <button
          onClick={() =>
            transferSelectedList(leftArr, setLeftArr, rightArr, setRightArr)
          }
        >
          {">"}
        </button>
        <button
          onClick={() =>
            transferSelectedList(rightArr, setRightArr, leftArr, setLeftArr)
          }
        >
          {"<"}
        </button>
        <button
          aria-label="Transfer all from right to left"
          onClick={() =>
            transferAll(rightArr, setRightArr, leftArr, setLeftArr)
          }
        >
          {"<<"}
        </button>
      </div>
      {/* Right list */}
      <ItemsList items={rightArr} setItems={setRightArr} />
    </div>
  );
}

export default App;
