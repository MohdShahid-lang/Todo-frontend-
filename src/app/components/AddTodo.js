import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createTodo } from "../services/todo.service";

const schema = yup.object({
    title: yup.string().required("This is a required field"),
    description: yup.string().required("This is a required field"),
});

const AddTodo = ({ setLoading, fetchTodos }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handleCreateTodo = async (data) => {
        await createTodo(data, setLoading, reset);
        fetchTodos();
    };

    return (
        <>
            <form
                onSubmit={handleSubmit(handleCreateTodo)}
                className="flex flex-col gap-4"
            >
                <div className="flex flex-col gap-2">
                    <label>Todo Title</label>
                    <input
                        type="text"
                        name="title"
                        {...register("title")}
                        placeholder="Enter todo title"
                        className={`font-semibold text-lg tracking-wide border border-dark-blue outline-0 p-1.5 rounded pl-4`}
                    />
                    {errors && (
                        <span className="text-sm text-red-500">
                            {errors.title?.message}
                        </span>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <label>Todo description</label>
                    <textarea
                        type="text"
                        name="description"
                        {...register("description")}
                        placeholder="Enter Todo description"
                        className={`font-medium text-sm tracking-wide border border-dark-blue outline-0 p-1.5 rounded pl-4`}
                    />
                    {errors && (
                        <span className="text-sm text-red-500">{errors.description?.message}</span>
                    )}
                </div>

                <button className="bg-medium-blue text-white w-fit p-1.5 mx-auto px-6 rounded cursor-pointer">
                    Add Todo
                </button>
            </form>
        </>
    );
};

export default AddTodo;
