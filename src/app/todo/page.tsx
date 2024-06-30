import MyContainer from "@/components/MyContainer";
import TodoItem from "@/components/TodoItem/TodoItem";
import React from "react";

const page = () => {
  return (
    <MyContainer className="">
      <h1 className="md:text-3xl text-2xl font-semibold text-center md:mt-20 mt-14">
        Todo page
      </h1>

      <form className="flex justify-center gap-7 md:mt-10 mt-7">
        <input
          className="bg-slate-200 px-4 py-3 rounded-md"
          type={"text"}
          name="todo"
        />

        <div className="flex justify-center">
          <button
            type="submit"
            className="md:text-base text-sm font-semibold bg-yellow-400 rounded-md px-5 py-2"
          >
            Add
          </button>
        </div>
      </form>

      <div className="bg-slate-500 rounded-lg md:p-8 p-6 md:mt-8 mt-6 space-y-5">
        <TodoItem todoText="The quick fox jump over the lazy dog." />
        <TodoItem todoText="The quick fox jump over the lazy dog." />
      </div>
    </MyContainer>
  );
};

export default page;
