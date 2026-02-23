import React from "react";

const TodoBox = () => {
  return (
    <>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          disabled
          value={`Todo Title`}
          className={`font-semibold text-lg tracking-wide border border-dark-blue outline-0 p-1.5 rounded pl-4`}
        />

        <textarea
          type="text"
          disabled
          value={`Todo Des`}
          className={`font-medium text-sm tracking-wide border border-dark-blue outline-0 p-1.5 rounded pl-4`}
        />

        <button className="bg-medium-blue text-white w-fit p-1.5 mx-auto px-6 rounded cursor-pointer">
          Update Todo
        </button>
      </form>

      <div className="w-full flex flex-col gap-3">
        <h3>Status</h3>
        <div className="grid grid-cols-3 w-full text-center *:border *:rounded *:p-1 *:cursor-pointer gap-3">
          <div className="border-emerald-500 text-emerald-500 bg-emerald-50">
            {" "}
            Pending
          </div>
          <div className="border-yellow-500 text-yellow-500 bg-yellow-50">
            In Progress
          </div>
          <div className="border-red-500 text-red-500 bg-red-50">Completed</div>
        </div>
      </div>
    </>
  );
};

export default TodoBox;