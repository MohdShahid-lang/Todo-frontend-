"use client";
import TodoBox from "./TodoBox";
import TodoStrip from "./TodoStrip";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AddTodo from "./AddTodo";
import { useUser } from "../context/Provider";
import { getTodos } from "../services/todo.service";

const Todo = () => {
  const { loading, setLoading, setTodos, todos } = useUser();

   async function fetchTodos() {
      await getTodos(setTodos, setLoading);
    }


  useEffect(() => {
  
    fetchTodos();
  }, []);

  const router = useRouter();

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  params.set("formtype", "add");

  const formType = searchParams.get("formtype");
  const todoId = searchParams.get("id");


    const filterTodo = todos.filter((todo) => todo._id === todoId)

    
  

  const handleAddForm = () => {
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="min-h-screen w-full p-6 pt-20 flex flex-col-reverse md:flex-row justify-end md:items-start md:justify-between">
      {/* Section 1  */}
      <div className="space-y-6 w-full flex flex-col md:w-3/4 lg:w-1/2 mx-auto">
        <h1 className="text-medium-blue font-semibold text-xl">Your Todos</h1>
        <button
          onClick={handleAddForm}
          className="bg-medium-blue cursor-pointer text-white w-fit px-4 p-2 rounded-lg self-end"
        >
          Add Todo
        </button>

        {/* List */}

        <div className="flex flex-col w-full gap-6">
          {todos?.length === 0
            ? "No Todos found"
            : todos?.map((todo) => (
              <TodoStrip
                key={todo._id}
                status={todo.status}
                todo={todo}
                params={params}
                router={router}
                setLoading={setLoading}
                fetchTodos={fetchTodos}
              />
            ))}
        </div>
      </div>
      {/* Section 2  */}
      <div className="w-full md:w-1/2 lg:w-1/3 rounded-xl border border-medium-blue text-dark-blue p-4 min-h-[40vh] flex gap-5 flex-col">
        {!formType && (
          <div className="flex items-center justify-center">
            Add or update Todo
          </div>
        )}
        {formType === "add" && <AddTodo fetchTodos={fetchTodos} setLoading={setLoading} />}
        {formType === "update" && <TodoBox filterTodo={filterTodo[0]} setLoading={setLoading} fetchTodos={fetchTodos} />}
      </div>
    </div>
  );
};

export default Todo;
