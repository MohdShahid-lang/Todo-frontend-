import React from "react";
import { Eye, Trash2 } from "lucide-react";

const TodoStrip = ({ status }) => {
  return (
    <>
      <div
        className={`
        ${status === "completed" ? "border-emerald-500 bg-emerald-50 text-emerald-500" : status === "inprogress" ? "border-yellow-500 bg-yellow-50 text-yellow-500" : status === "pending" ? "border-red-500 bg-red-50 text-red-500" : "border-dark-blue"}

border  rounded-xl p-3 flex items-center justify-between gap-6 group
        `}
      >
        <h1
          className={`font-semibold text-lg ${status === "completed" && "line-through"}`}
        >
          Todo Title
        </h1>
        <div className="flex gap-2 items-center">
          <Eye className="text-slate-500 cursor-pointer hidden group-hover:block" />
          <Trash2 className="text-red-500 hidden group-hover:block cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default TodoStrip;