import "./tweets.scss"
import Tweet from "../tweet/Tweet";
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from "../../axios";
import axios from "axios";

const Tweets = () => {
    
    const { isLoading, error, data } = useQuery(["tweets"], () =>

        // makeRequest.get("/tweets").then((res) => {
        //     return res.data;
        // })

        axios.get("http://localhost:8800/api/tweets").then((res) => { //Call axios directly because the makeRequest.get gets the client side endpoint
            return res.data;
        })
     );
    
     console.log("Data ", data);
   
    return <div className="tweets">
        {error 
            ? "Something went wrong!" 
            : isLoading ? <h2>loading</h2>
            : data.map(tweet=>(
            <Tweet tweet={tweet} key={tweet.id}/> //Seperating the tweets generated from the tweets that get displayed
            
        ))}
    </div>;
};

export default Tweets