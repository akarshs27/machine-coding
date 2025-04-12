import "./styles.css";
import { useState } from "react";

const checkboxData = [
  {
    id: 1,
    name: "Grandparent",
    children: [
      {
        id: 2,
        name: "Parent 1",
        children: [
          {
            id: 3,
            name: "Child 1",
          },
          {
            id: 4,
            name: "Child 2",
          },
        ],
      },
      {
        id: 5,
        name: "Parent 2",
        children: [
          {
            id: 6,
            name: "Child 1",
          },
        ],
      },
      {
        id: 7,
        name: "Parent 3",
      },
    ],
  },
];

const NestedCheckbox = ({ data, checked, setChecked }) => {
  function handleChange(isChecked, node) {
    setChecked((prev) => {
      const newState = { ...prev, [node.id]: isChecked };

      function makeAllChildCheck(node) {
        node.children?.forEach((eachChildNode) => {
          newState[eachChildNode.id] = isChecked;
          eachChildNode.children && makeAllChildCheck(eachChildNode);
        });
      }
      makeAllChildCheck(node);

      function makeParentCheckedifAllChildChecked(node) {
        console.log("node", node);
        if (!node.children) return newState[node.id] || false;
        const isAllChildChecked = node.children.every((child) =>
          makeParentCheckedifAllChildChecked(child)
        );
        if (newState[node.id] !== isAllChildChecked) {
          newState[node.id] = isAllChildChecked;
        }
        return isAllChildChecked;
      }
      checkboxData.forEach((eachNode) =>
        makeParentCheckedifAllChildChecked(eachNode)
      );

      return newState;
    });
  }

  console.log("checked", checked);

  return (
    <div>
      {data.map((node) => (
        <div key={node.id} className="parent">
          <input
            type="checkbox"
            checked={checked[node.id] || false}
            onChange={(e) => handleChange(e.target.checked, node)}
          />
          <span>{node.name}</span>
          {node.children && (
            <NestedCheckbox
              data={node.children}
              checked={checked}
              setChecked={setChecked}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default function App() {
  const [checked, setChecked] = useState({});
  return (
    <div className="App">
      <NestedCheckbox
        data={checkboxData}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
}
