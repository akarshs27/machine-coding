import './App.css';
import React, { useState } from 'react';

function App() {

  const data = [
    { first_name: "A", last_name: "B" },
    { first_name: "C", last_name: "D" },
    { first_name: "E", last_name: "F" }
  ];

  const initialState = data.map((each) => ({
    first_name: each.first_name,
    last_name: each.last_name,
    status: true
  }));

  const [employeeData, setEmployeeData] = useState(initialState);

  function toggleStatus(each) {
    const newData = [...employeeData];
    const changedData = newData.find((eachD) => eachD === each);
    changedData.status = !changedData.status;
    setEmployeeData(newData);
  }


  return (
    <div className="App">
        {employeeData.map((each) => (
        <div
          style={{ display: "flex", gap: "24px" }}
          onClick={() => toggleStatus(each)}
          key={each.first_name}
        >
          <p>
            {each.first_name} {each.last_name}
          </p>
          <p>{each.status ? "Online" : "Offline"} </p>
        </div>
      ))}
    </div>
  );
}

export default App;
