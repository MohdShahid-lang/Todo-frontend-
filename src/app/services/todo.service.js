import toast from "react-hot-toast";
import { getToken } from "./user.service";
import { axiosInstance } from "../../api/axios";

export const getTodos = async (setTodos, setLoading) => {
    setLoading(true);
    try {
        const res = await axiosInstance.get("/todo", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });

        console.log(res.data.Todos);
        

        setTodos(res.data.Todos);
    } catch (error) {
        console.log(error.response);
    } finally {
        setLoading(false);
    }
};

export const createTodo = async (data, setLoading, reset) => {
    setLoading(true);
    try {
        const res = await axiosInstance.post("/todo/create", data, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });


        console.log(res);
        

        toast.success(res?.data?.messege);
        reset();
    } catch (error) {
        toast.error(error?.response?.data?.message);
    } finally {
        setLoading(false);
    }
};



export const deleteTodo = async (id, setLoading) => {
    setLoading(true);
    try {
        const res = await axiosInstance.delete(`/todo/delete/${id}`, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });

        toast.success(res.data.messege);
        console.log(res)
        
    } catch (error) {
        toast.error(error?.response?.data?.message);
    } finally{
        setLoading(false);
    }
    
};


export const updateDetails = async (data, id, setLoading) => {
    setLoading(true)
    try {
        const res = await axiosInstance.patch(`/todo/update-details/${id}`, data, {
            headers:{
            Authorization: `Bearer ${getToken()}`,
        },
        })
     toast.success(res.data.messege);
        console.log(res);
    } catch (error) {
    toast.error(error?.response?.data?.message);
    }finally{
       setLoading(false);
    }
}

export const updateStatus = async (data, id, setLoading) => {
    setLoading(true)
    try {
        const res = await axiosInstance.patch(`/todo/update-status/${id}`, data, {
            headers:{
            Authorization: `Bearer ${getToken()}`,
        },
        })
     toast.success(res.data.messege);
        console.log(res);
    } catch (error) {
    toast.error(error?.response?.data?.message);
    }finally{
       setLoading(false);
    }
}