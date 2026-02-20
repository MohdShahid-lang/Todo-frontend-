"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { userRegister } from "../services/user.service";
import { useRouter } from "next/navigation";
import { useUser } from "../context/Provider";
import PublicRoutes from "../components/PublicRoutes";


const schema = yup.object({
  name: yup.
    string()
    .required(),

  email: yup
    .string()
    .required("this is a required field")
    .email("invalid Email"),

  password: yup
    .string()
    .required("This is a required field")
    .min(6, "Minimum 6 characters")
    .max(12, "Maximum 12 characters")
})

const Page = () => {

  const { register, reset, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(schema), });

  const {loading, setLoading } = useUser();
  const router = useRouter();

  const onSubmit =async (data) => {
   await userRegister(data, setLoading, router, reset);
  };


  return (
<PublicRoutes>
    <div className="w-full min-h-screen">
      {/* Heading */}
      <div className="">
        <h1 className="text-medium-blue p-4 text-2xl font-medium lowercase border-b-2 border-extralight-blue">
          TaskDoe
        </h1>
      </div>
      {/* Login Form  */}
      <div className="flex flex-col w-full md:w-9/12 lg:w-1/3 md:mt-10 mx-auto items-start gap-5 justify-center p-10 text-medium-blue">
        {/* Login headings  */}
        <div className="space-y-3">
          <h2 className="text-3xl">Register</h2>
          <p>Hii welcome back !</p>
        </div>

        {/* Form  */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full space-y-6 flex flex-col items-center justify-center">
          {/* name */}
          <div className="flex flex-col gap-2 w-full">
            <label>name</label>
            <input
              className="w-full rounded outline-0 border border-medium-blue p-1.5"
              name="name"
              type="name"
              //we are using spread operator
              {...register("name")}
            />
            <span className="text-red-500 text-xs">
              {errors && errors?.name?.message}
            </span>
          </div>
          {/* Email */}
          <div className="flex flex-col gap-2 w-full">
            <label>Email</label>
            <input
              className="w-full rounded outline-0 border border-medium-blue p-1.5"
              name="email"
              type="email"
              //we are using spread operator
              {...register("email")}
            />
            <span className="text-red-500 text-xs">
              {errors && errors?.email?.message}
            </span>
          </div>
          {/* password */}
          <div className="flex flex-col gap-2 w-full">
            <label>Password</label>
            <input
              className="w-full rounded outline-0 border border-medium-blue p-1.5"
              name="password"
              type="password"
              //we are using spread operator
              {...register("password")}
            />
            <span className="text-red-500 text-xs">
              {errors && errors?.password?.message}
            </span>
          </div>
          <button disabled={loading}
           className={`w-full text-white bg-medium-blue p-2 rounded 
            ${loading ? "opacity-80 cursor-not-allowed ": "cursor-pointer"}
            `}
          >
           {loading ? "creating your account..." : "Register"}

          </button>
          <span className="text-sm">
            Already have an account?
            <Link
              href="/login"
              className="underline underline-offset-2 cursor-pointer"
            >
              {" "}
              login
            </Link>
          </span>
        </form>
      </div>
    </div>
    </PublicRoutes>
  );
};

export default Page;
