import React from "react";
import { useForm } from "react-hook-form";
import { updateDetails, updateStatus } from "../services/todo.service";

const TodoBox = ({ filterTodo, setLoading, fetchTodos }) => {
  const { register, handleSubmit } = useForm();

  const hendelUpdate = async (data) => {
    await updateDetails(data, filterTodo._id, setLoading);
    fetchTodos();
  };

  const handelUpdateSatus = async (status) => {
    await updateStatus ({ status }, filterTodo?._id, setLoading);
    fetchTodos();
    
  }

  return (
    <>
      <form onSubmit={handleSubmit(hendelUpdate)} className="flex flex-col gap-4">
        <input
          type="text"
          required
          defaultValue={filterTodo?.title}
          {...register("title")}
          className={`font-semibold text-lg tracking-wide border border-dark-blue outline-0 p-1.5 rounded pl-4`}
        />

        <textarea
          type="text"
          defaultValue={filterTodo?.description}
          {...register("description")}
          className={`font-medium text-sm tracking-wide border border-dark-blue outline-0 p-1.5 rounded pl-4`}
        />

        <button className="bg-medium-blue text-white w-fit p-1.5 mx-auto px-6 rounded cursor-pointer">
          Update Todo
        </button>
      </form>

        <div className="w-full flex flex-col gap-3">
        <h3>Status</h3>
        <div className="grid grid-cols-3 w-full text-center *:border *:rounded *:p-1 *:cursor-pointer gap-3">
          <div
            onClick={() => handelUpdateSatus("pending")}
            className={`${filterTodo?.status === "pending" ? "bg-red-500 text-white border" : "border-red-500 text-red-500 bg-red-50"}`}
          >
            {" "}
            Pending
          </div>
          <div
            onClick={() => handelUpdateSatus("inprogress")}
            className={`${filterTodo?.status === "inprogress" ? "bg-yellow-500 text-white border" : "border-yellow-500 text-yellow-500 bg-yellow-50"}`}
          >
            In Progress
          </div>
          <div
            onClick={() => handelUpdateSatus("completed")}
            className={`${filterTodo?.status === "completed" ? "bg-emerald-500 text-white border" : "border-emerald-500 text-emerald-500 bg-emerald-50"}`}
          >
            Completed
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoBox;