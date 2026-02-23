import { axiosIntance } from "@/api/axios";


export const getTodos = async (setTodos, setLoading) => {
   setLoading(true);
   try {
    const res = await axiosIntance.get("/todo",{
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });

    console.log(res);

    setTodos(res.data);
    
   } catch (error) {
    console.log(error.response);
   } finally{
    setLoading(false);   }
};