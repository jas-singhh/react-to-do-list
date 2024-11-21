import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import { useState } from "react";

function TodoInput(props) {
  const { handleAddTask } = props;
  const [inputVal, setInputVal] = useState("");

  return (
    <div className="flex w-[768px] justify-between mx-auto rounded-md py-6 px-10 my-8 bg-slate-50 gap-2">
      <input
        className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        type="text"
        placeholder="Add a new task"
        onChange={(e) => setInputVal(e.target.value)}
        value={inputVal}
      />

      <button
        className="bg-blue-600 text-white transition-colors 
      duration-300 ease-in-out shadow-lg hover:shadow-sm hover:bg-blue-700 px-4 
      py-2 rounded-md text-lg"
        onClick={() => {
          if (inputVal === "") return;

          setInputVal("");
          handleAddTask(inputVal);
        }}
      >
        <IoIosAddCircle />
      </button>
    </div>
  );
}

export default TodoInput;
