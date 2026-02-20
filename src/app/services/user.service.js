// Register

import { axiosIntance } from "@/api/axios";
import toast from "react-hot-toast";

export const userRegister = async (data, setLoading, router, reset) => {
    console.log(data)
    setLoading(true); // Loading transaction started
    try {
        const res = await axiosIntance.post("/user/register", data );
        toast.success(res.data?.message);
        router.push("/login");
        reset();
    } catch (error) {
        console.log(error);
        const message = error?.response?.data?.message || "something went wrong"
    } finally {
        setLoading(false) // transaction ended
    }

};


export const userLogin = async (data, setLoading, router, reset) => {
    setLoading(true); // Loading transaction started
    try {
        const res = await axiosIntance.post("/user/login", data);
        toast.success(res.data?.message);
        console.log(res.data?.user);
       const token = res.data?.user?.token;
        localStorage.setItem("token", token);
        router.push("/");
        reset();
    } catch (error) {
        console.log(error.response.data);
        const message = error?.response?.data?.message || "something went wrong"

        toast.error(message )
    } finally {
        setLoading(false) // transaction ended
    }

};



export const hasToken = () => {
  if (typeof window === "undefined")return false;
   
  return!!localStorage.getItem("token");
};