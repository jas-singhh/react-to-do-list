import Header from "./components/Header";
import Tabs from "./components/Tabs";
import ToDoList from "./components/ToDoList";
import TodoInput from "./components/ToDoInput";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { task: "Welcome to the ToDo App", completed: true },
  ]);

  function handleAddTask(task) {
    if (task === "") return;

    const taskObj = [...tasks, { task: task, completed: false }];

    setTasks(taskObj);
  }

  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <Header tasks={tasks} />
        <Tabs tasks={tasks} />
        <ToDoList tasks={tasks} />
        <TodoInput handleAddTask={handleAddTask} />
      </div>
    </>
  );
}

export default App;
