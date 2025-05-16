import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Personal = ({ data, setData, error }) => {
  function handleChange(e) {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  return (
    <div>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={(e) => handleChange(e)}
        />
        {error.name && <span>{error.name}</span>}
      </div>
      <div>
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={data.age}
          onChange={(e) => handleChange(e)}
        />
        {error.age && <span>{error.age}</span>}
      </div>
    </div>
  );
};

const Second = ({ data, setData }) => {
  function addOrRemove(arr, el) {
    if (arr.includes(el)) {
      return arr.filter((item) => item !== el);
    } else {
      return [...arr, el];
    }
  }

  function handleChange(e) {
    const interests = [...data.interests];
    const updatedInterests = addOrRemove(interests, e.target.name);
    setData((prev) => ({ ...prev, interests: updatedInterests }));
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="Gaming"
          checked={data.interests.includes("Gaming")}
          onChange={(e) => handleChange(e)}
        />
        Gaming
      </label>

      <label>
        <input
          type="checkbox"
          name="Coding"
          checked={data.interests.includes("Coding")}
          onChange={(e) => handleChange(e)}
        />
        Coding
      </label>
      <label>
        <input
          type="checkbox"
          name="Sleeping"
          checked={data.interests.includes("Sleeping")}
          onChange={(e) => handleChange(e)}
        />
        Sleeping
      </label>
    </div>
  );
};

const Third = ({ data, setData }) => {
  const handleChange = (e) => {
    setData((prev) => ({ ...prev, theme: e.target.name }));
  };
  return (
    <div>
      <label>
        <input
          type="radio"
          name="dark"
          checked={data.theme === "dark"}
          onChange={(e) => handleChange(e)}
        />
        Dark
      </label>
      <label>
        <input
          type="radio"
          name="light"
          checked={data.theme === "light"}
          onChange={(e) => handleChange(e)}
        />
        Light
      </label>
    </div>
  );
};

function App() {
  const [active, setActive] = useState(0);
  const [data, setData] = useState({
    name: "",
    age: null,
    interests: [],
    theme: "",
  });
  const [error, setError] = useState({});
  const TABS = [
    {
      name: "Personal",
      component: Personal,
      validation: () => {
        const err = {};
        if (data.name.length < 2) {
          err.name = "Name is invalid";
        }
        if (data.age < 2) {
          err.age = "Age is invalid";
        }

        setError(err);
        return err.name || err.age ? false : true;
      },
    },
    {
      name: "Second",
      component: Second,
    },
    {
      name: "Third",
      component: Third,
    },
  ];
  const ActiveComponent = TABS[active].component;

  console.log("data", data);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {TABS.map((each, index) => {
        return (
          <button key={each.name} onClick={() => setActive(index)}>
            {each.name}
          </button>
        );
      })}

      <ActiveComponent data={data} setData={setData} error={error} />
      {active > 0 && <button>Prev</button>}
      {active < TABS.length - 1 && <button>Next</button>}
    </div>
  );
}

export default App;
