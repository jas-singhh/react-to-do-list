import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { task: "Welcome to the ToDo App", completed: false },
  ]);

  const [selectedTab, setSelectedTab] = useState("Open");

  function handleAddTask(task) {
    if (task === "") return;

    const taskObj = [...tasks, { task: task, completed: false }];

    setTasks(taskObj);
    handleSaveTasks(taskObj);
  }

  function handleCompleteTask(index) {
    const newList = [...tasks];

    newList[index].completed = true;

    setTasks(newList);
    handleSaveTasks(newList);
  }

  function handleDeleteTask(index) {
    const newList = [...tasks];

    newList.splice(index, 1);

    setTasks(newList);
    handleSaveTasks(newList);
  }

  function handleSaveTasks(tasks) {
    if (localStorage) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }

  useEffect(() => {
    if (localStorage && localStorage.getItem("tasks")) {
      setTasks(JSON.parse(localStorage.getItem("tasks")));
    }
  }, []);

  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <Header tasks={tasks} />
        <Tabs
          tasks={tasks}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <TodoList
          handleDeleteTask={handleDeleteTask}
          handleCompleteTask={handleCompleteTask}
          selectedTab={selectedTab}
          tasks={tasks}
        />
        <TodoInput handleAddTask={handleAddTask} />
      </div>
    </>
  );
}

export default App;
