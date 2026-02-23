"use client";
import { useEffect } from "react";
import TodoBox from "./TodoBox";
import TodoStrip from "./TodoStrip";
import { getTodos } from "../services/todo.service";
import { useUser } from "../context/Provider";


const Todo = () => {
  const {loading, setLoading, setTodos, todos} = useUser();

  useEffect(() => {
    async function fetchTodos() {
      await getTodos(setTodos, setLoading);
      
    }
  fetchTodos();
  }, []);


  return (
    <div className="min-h-screen w-full p-6 pt-20 flex flex-col-reverse md:flex-row justify-end md:items-start md:justify-between">
      {/* Section 1  */}
      <div className="space-y-6 w-full flex flex-col md:w-3/4 lg:w-1/2 mx-auto">
        <h1 className="text-medium-blue font-semibold text-xl">Your Todos</h1>
        <button className="bg-medium-blue cursor-pointer text-white w-fit px-4 p-2 rounded-lg self-end">
          Add Todo
        </button>

        {/* List */}

        <div className="flex flex-col w-full gap-6">
          <TodoStrip status={"inprogress"} />
          <TodoStrip status={"pending"} />
          <TodoStrip status={"completed"} />
        </div>
      </div>
      {/* Section 2  */}
      <div className="w-full md:w-1/2 lg:w-1/3 rounded-xl border border-medium-blue text-dark-blue p-4 min-h-[40vh] flex gap-5 flex-col">
        <TodoBox />
      </div>
    </div>
  );
};

export default Todo