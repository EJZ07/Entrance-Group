import {createContext, useEffect, useState} from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null //To prevent the state from returning as a string we need to use JSON.parse
    );

    const login = () =>{
        //TO DO
        //Pull user information from api
        setCurrentUser({
            id:1, 
            name:"Gin Freecs", 
            bio:"the One Piece is Real",
            followers:20,
            following:1000,
            profilePic:"https://sportshub.cbsistatic.com/i/2022/11/15/82c5a65f-9edc-434d-9265-4f39aac44912/spy-x-family-71-anya-hostage-crisis-twist-manga.jpg",
        });
    }; 

    useEffect( ()=>{
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser])

    return(
        <AuthContext.Provider value={{currentUser, login}}>
        {children}
        </AuthContext.Provider>
    )
}