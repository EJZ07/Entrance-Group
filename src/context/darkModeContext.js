import {createContext, useEffect, useState} from "react";

export const DarkModeContext = createContext()

export const DarkModeContextProvider = ({children}) =>{
    const [darkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem("darkMode")) || false //To prevent the state from returning as a string we need to use JSON.parse
    );

    const toggle = () =>{
        setDarkMode(!darkMode)
    }

    useEffect( ()=>{
        localStorage.setItem("darkMode", darkMode)
    }, [darkMode])

    return(
        <DarkModeContext.Provider value={{darkMode, toggle}}>
        {children}
        </DarkModeContext.Provider>
    )
}