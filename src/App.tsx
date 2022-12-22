import React from "react";
import "./App.css";
import { Task } from "./types";
import { Board, Column } from "./components";

function App() {
  const [tasks, setTasks] = React.useState<Task[]>([
    {
      id: 1,
      description: "Task 1",
      title: "Task 1",
      tags: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "tag8"],
    },
    {
      id: 2,
      description: "Task 2",
      title: "Task 2",
      tags: ["tag1", "tag2"],
    },
    {
      id: 3,
      description: "Task 3",
      title: "Task 3",
      tags: ["tag1", "tag2"],
    },
    {
      id: 4,
      description: "Task 4",
      title: "Task 4",
      tags: ["tag1", "tag2"],
    },
    {
      id: 5,
      description: "Task 5",
      title: "Task 5",
      tags: ["tag1", "tag2"],
    },
    {
      id: 6,
      description: "Task 6",
      title: "Task 6",
      tags: ["tag1", "tag2"],
    },
  ]);
  return (
    <div className="container mx-auto bg-white">
      <div className="font-bold text-center text-xl p-2">Your Board</div>
      <Board>
        <Column title="To Do" tasks={tasks} id={1} />
        <Column title="In Progress" tasks={tasks} id={2} />
        <Column title="Done" tasks={tasks} id={3} />
      </Board>
    </div>
  );
}

export default App;
