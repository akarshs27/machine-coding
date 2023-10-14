import "./App.css";
import Tabs, { Tab } from "./Tabs";

function App() {
  return (
    <div className="App">
      <Tabs>
        <Tab title="Lemon">Lemon is yellow</Tab>
        <Tab title="Strawberry">Strawberry is red</Tab>
        <Tab title="Pear">Pear is green</Tab>
      </Tabs>
    </div>
  );
}

export default App;
