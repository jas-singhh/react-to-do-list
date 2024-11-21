import React from "react";

function Tabs(props) {
  const tabs = ["All", "Open", "Completed"];
  const { tasks } = props;

  const openTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <nav className="flex w-full my-5 justify-center gap-10">
      {tabs.map((tab, tabIndex) => {
        return (
          <button
            key={tabIndex}
            className="px-9 text-lg py-3 border-b-2 capitalize font-semibold text-white w-48 hover:shadow-sm hover:text-slate-300 active:bg-slate-200 active:text-slate-900"
          >
            {tab} (
            {tab === "all"
              ? tasks.length
              : tab === "open"
              ? openTasks.length
              : completedTasks.length}
            )
          </button>
        );
      })}
    </nav>
  );
}

export default Tabs;
