import Accordion from "./Accordion";
import "./App.css";

const data = [
  {
    id: 1,
    name: "Name 1",
    description: "Child of Name 1",
  },
  {
    id: 2,
    name: "Name 2",
    description: "Child of Name 2",
  },
  {
    id: 3,
    name: "Name 3",
    description: "Child of Name 3",
  },
  {
    id: 4,
    name: "Name 4",
    description: "Child of Name 4",
  },
];

function App() {
  return (
    <div className="App">
      <Accordion data={data} />
    </div>
  );
}

export default App;
