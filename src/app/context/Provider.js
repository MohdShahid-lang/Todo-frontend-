"use client";

import {  createContext, useContext, useEffect, useState } from "react";

const userContext = createContext();


export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(false);

    // Todo related states
    const [todos, setTodos] = useState([]);
    useEffect(()=>{
        const storedToken = localStorage.getItem("token");

        if (storedToken){
            setToken(storedToken);
        }
    }, []);

    return (<userContext.Provider value={{ token, setToken, loading, setLoading }}>{children}</userContext.Provider>
    );
};

export const useUser = () => useContext(userContext)