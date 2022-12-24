import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null //To prevent the state from returning as a string we need to use JSON.parse
    );

    const login = async (inputs) =>{
        //TO DO
        //Pull user information from api
        const res = await axios.post("http://localhost:8800/api/auth/login", inputs, {
            withCredentials:true,
        });

        setCurrentUser(res.data)
        // setCurrentUser({
        //     id: 1,
        //     name: "Logan Paul",
        //     profilePic: 
        //         "https://cdn.motor1.com/images/mgl/G4z31/s3/tesla-roadster.jpg",
        // })
        
    }; 

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return(
        <AuthContext.Provider value={{currentUser, login}}>
        {children}
        </AuthContext.Provider>
    )
}