import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const TweetContext = createContext();

export const TweetContextProvider = ({children}) =>{
    const [currentTweeter, setCurrentTweeter] = useState(
        JSON.parse(localStorage.getItem("tweeter")) || null //To prevent the state from returning as a string we need to use JSON.parse
    );

    const setTweeter = async (tweetId) =>{
        //TO DO
        //Pull user information from api
        // const res = await axios.get("http://localhost:8800/api/threads", tweet)
        
        console.log("Thread DATA", tweetId)
        setCurrentTweeter(tweetId)
        
    }; 

    useEffect(()=>{
        localStorage.setItem("tweeter", JSON.stringify(currentTweeter));
    }, [currentTweeter]);

    return(
        <TweetContext.Provider value={{currentTweeter, setTweeter}}>
        {children}
        </TweetContext.Provider>
    )
}