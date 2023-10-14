import { useState } from "react";

export const Tab = ({ children }) => {
  return <div style={{ backgroundColor: "yellow" }}>{children}</div>;
};

export const TabTitle = ({ title, index, setSelectedTab }) => {
  return <button onClick={() => setSelectedTab(index)}>{title}</button>;
};

const Tabs = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  console.log(children);
  return (
    <div style={{ backgroundColor: "red" }}>
      <ul>
        {children.map((item, index) => (
          <TabTitle
            title={item.props.title}
            key={index}
            index={index}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </ul>
      {children[selectedTab]}
    </div>
  );
};

export default Tabs;
