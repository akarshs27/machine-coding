import { useState } from "react";

const Accordion = ({ data }) => {
  const [isActive, setIsActive] = useState(0);
  return (
    <div>
      {data.map((each) => (
        <div style={{ width: "300px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>{each.name}</p>
            <button onClick={() => setIsActive(each.id)}>{">"}</button>
          </div>
          {each.id === isActive && (
            <div>
              <p>{each.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
