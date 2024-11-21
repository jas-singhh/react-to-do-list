import React from "react";
import TodoCard from "./TodoCard";

function TodoList(props) {
  const { tasks, selectedTab, handleDeleteTask, handleCompleteTask } = props;

  const filterTodosList =
    selectedTab === "All"
      ? tasks
      : selectedTab === "Completed"
      ? tasks.filter((val) => val.completed)
      : tasks.filter((val) => !val.completed);

  return (
    <>
      {filterTodosList.map((task, taskIndex) => {
        return (
          <TodoCard
            key={taskIndex}
            taskIndex={tasks.findIndex((val) => val.task === task.task)}
            {...props}
            task={task}
          />
        );
      })}
    </>
  );
}

export default TodoList;
