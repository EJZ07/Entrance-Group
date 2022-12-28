import "./thread.scss"
import { Link }from "react-router-dom";
import { TweetContext } from "../../context/tweetContext";
import {AuthContext} from "../../context/authContext"
import { useContext } from "react";
import { useQuery } from '@tanstack/react-query';
import makeRequest  from "../../axios";
import ExtraThread from "../extrathread/ExtraThread";

const Thread = ({tweetId}) => {
    //TEMPORARY
    var state = true;
    console.log("Tweet Id: Thread", tweetId);
    const {currentUser} = useContext(AuthContext);
    const {currentTweeter} = useContext(TweetContext);

    const { isLoading, error, data } = useQuery(["comments"], () =>

        makeRequest.get("/comments?tweetId="+currentTweeter).then((res) => {
            return res.data;
        })

        // axios.get("http://localhost:8800/api/comments").then((res) => { //Call axios directly because the makeRequest.get gets the client side endpoint
        //     return res.data;
        // })
     );

     console.log("Data retreived", data);
    

    const liked = false;
    return <div className="thread">
    {isLoading 
    ? "lodaing"
    : data.map(reply=>(
        <ExtraThread reply={reply} key={data.id}/>
    ))}
    </div>;
};

export default Thread