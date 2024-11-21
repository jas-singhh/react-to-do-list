import React from "react";
import TodoCard from "./TodoCard";

function TodoList(props) {
  const { tasks } = props;

  const tab = "All";

  const filteredList = tasks.filter(
    (task) =>
      tab === "All" ||
      (tab === "Open" && !task.completed) ||
      (tab === "Completed" && task.completed)
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
