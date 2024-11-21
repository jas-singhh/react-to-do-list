import React from "react";
import TodoCard from "./TodoCard";

function TodoList(props) {
  const { tasks, selectedTab } = props;

  const filteredList = tasks.filter(
    (task) =>
      selectedTab === "All" ||
      (selectedTab === "Open" && !task.completed) ||
      (selectedTab === "Completed" && task.completed)
  );

  return (
    <>
      {filteredList.map((task, taskIndex) => {
        return <TodoCard key={taskIndex} task={task} />;
      })}
    </>
  );
}

export default TodoList;
