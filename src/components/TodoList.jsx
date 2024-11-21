import React from "react";
import TodoCard from "./TodoCard";

function TodoList(props) {
  const { tasks, selectedTab, handleDeleteTask } = props;

  const filteredList = tasks.filter(
    (task) =>
      selectedTab === "All" ||
      (selectedTab === "Open" && !task.completed) ||
      (selectedTab === "Completed" && task.completed)
  );

  return (
    <>
      {filteredList.map((task, taskIndex) => {
        return (
          <TodoCard
            key={taskIndex}
            taskIndex={taskIndex}
            task={task}
            handleDeleteTask={handleDeleteTask}
          />
        );
      })}
    </>
  );
}

export default TodoList;
