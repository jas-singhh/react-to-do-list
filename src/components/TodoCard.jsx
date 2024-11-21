import React from "react";

function TodoCard(props) {
  const { task } = props;

  return (
    <>
      <div className="w-[768px] container py-4 px-12 mx-auto bg-slate-100 shadow-md rounded-md my-4">
        <p className="py-2 text-lg">{task.task}</p>

        <div className="flex gap-2 my-4 justify-start">
          <button className="bg-red-600 text-white transition-colors duration-300 ease-in-out shadow-lg hover:shadow-sm hover:bg-red-700 px-4 py-2 rounded-md text-md ">
            Delete
          </button>
          <button className="bg-green-700 text-white transition-colors duration-300 ease-in-out shadow-lg hover:shadow-sm hover:bg-green-800 px-4 py-2 rounded-md text-md">
            Done
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoCard;