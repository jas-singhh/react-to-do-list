import React from "react";

function Header(props) {
  const { tasks } = props;
  const openTasks = tasks.filter((task) => !task.completed);

  return (
    <nav>
      <div className=" py-7 w-full sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 ">
        <div className="container w-full mx-auto flex justify-between items-center">
          <div>
            <h2 className="uppercase text-xl font-bold text-orange-700">
              Logo
            </h2>
          </div>

          <div className="">
            <h4 className="font-semibold text-xl text-gray-200">
              You have {openTasks.length}{" "}
              {openTasks.length === 1 ? "task" : "tasks"} left
            </h4>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
