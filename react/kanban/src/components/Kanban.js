import { useState } from "react";

const boardsData = [
  {
    id: 1,
    name: "to_do",
    title: "To Do",
    tasks: [],
  },
  {
    id: 2,
    name: "in_progress",
    title: "In Progress",
    tasks: [],
  },
  {
    id: 3,
    name: "done",
    title: "Done",
    tasks: [],
  },
];

const Kanban = () => {
  const [formData, setFormData] = useState({
    title: "",
    status: "",
  });
  const [boards, setBoards] = useState(boardsData);

  function handleChange(key, value) {
    setFormData({ ...formData, [key]: value });
  }

  function handleAddTask() {
    let temp = [...boards];
    let changedData = temp.find((each) => each.name === formData.status);
    if (changedData) {
      changedData.tasks.push({ id: Date.now(), ...formData });
    }
    setBoards(temp);
  }

  console.log({ boards });

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter task"
          value={formData.title}
          onChange={(event) => handleChange("title", event.target.value)}
        />
        <select
          onChange={(event) => handleChange("status", event.target.value)}
        >
          <option>Select</option>
          {["to_do", "in_progress", "done"].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
};

export default Kanban;
