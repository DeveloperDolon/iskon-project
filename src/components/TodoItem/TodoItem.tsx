import React from "react";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

interface TTodoItem {
  todoText: string;
  createdAt: string;
}

const TodoItem = ({ todoText, createdAt }: TTodoItem) => {
  return (
    <div className="flex items-center justify-between bg-slate-400 text-white py-4 px-6 rounded-lg">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          name="check"
          id=""
          className="md:h-5 md:w-5 h-3 w-3"
        />

        <p className={`md:text-lg text-base font-medium`}>{todoText}</p>
      </div>

      <div className="flex gap-4">
        <button className="md:text-2xl text-xl">
          <MdDelete />
        </button>

        <button className="md:text-2xl text-xl">
          <CiEdit />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
