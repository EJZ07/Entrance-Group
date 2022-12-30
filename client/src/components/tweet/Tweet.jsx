import "./tweet.scss"
import { Link } from "react-router-dom";
import Thread from "../thread/Thread";
import ReplyComment from "../replycomment/ReplyComment";
import {useState} from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { useContext } from "react";
import { TweetContext } from "../../context/tweetContext";
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from "../../axios";
import axios from "axios";
import { AuthContext } from "../../context/authContext";
import {useMutation, useQueryClient} from '@tanstack/react-query';
import moment from "moment";

const Tweet = ({tweet}) => {
    const [composePopup, setComposePopup] = useState(false);
    const {setTweeter} = useContext(TweetContext);
    const {currentUser} = useContext(AuthContext);
    
    const { isLoading, error, data } = useQuery(["likes", tweet.id], async () =>

       await makeRequest.get("/likes?tweetId=" + tweet.id).then((res) => {
            return res.data;
            
                
        })

        // axios.get("http://localhost:8800/api/likes?tweetId="+tweet.id).then((res) => { //Call axios directly because the makeRequest.get gets the client side endpoint
        //     return res.data;
        // })
     );
     
    const queryClient = useQueryClient()

    const mutation = useMutation((liked)=> {
        if(liked)
            return makeRequest.delete("/likes?tweetId="+ tweet.id)
        return makeRequest.post("/likes", {tweetId : tweet.id})
        // axios.post("http://localhost:8800/api/tweets", newTweet)
        
    }, {
        onSuccess: () => {
          // Invalidate and refetch
          queryClient.invalidateQueries(["likes"]);
        },
      })

     const handleLike = () =>{
        mutation.mutate(data.includes(currentUser.id))
     }

     console.log("Likes", data);

    //TEMPORARY
    const liked = false;
    return (isLoading ? <h2>loading</h2> : 
        <div className="tweet">
        
        <div className="container" >
            <div className="user">
                <div className="userInfo">
                    <img src={tweet.profilePic} alt="" />
                    <div className="details">
                        <Link 
                        to={`/profile/${tweet.userId}`} 
                        style={{textDecoration:"none", color:"inherit"}}
                        >
                        <span className="name">{tweet.name}</span>
                        
                        </Link>
                        <span className="date"> {moment(tweet.createdAt).fromNow()}</span>
                    </div>
                    
                </div>
                <MoreHorizOutlinedIcon/>
            </div>
            <Link 
             to={`:${tweet.userId}/comments/:${tweet.id}`}
              style={{textDecoration:"none", color:"inherit"}}
              onClick={() => setTweeter(tweet.id)}
            >
             <div className="content">
                <p>{tweet.desc}</p>
                <img src={"./upload/"+tweet.img} alt=""/>
             </div>
             </Link>
             <div className="info" >
                <div className="item">
              
                <TextsmsOutlinedIcon onClick={() => setComposePopup(true)}/> 34
                <ReplyComment trigger={composePopup} setTrigger={setComposePopup}>
                <div className="user">
                    <div className="userInfo">
                        <img src={tweet.profilePic} alt="" />
                        <div className="details">
                            <Link 
                            to={`/profile/${tweet.userId}`} 
                            style={{textDecoration:"none", color:"inherit"}}
                            >
                            <span className="name">{tweet.name}</span>
                        
                            </Link>
                            <span className="date"> . 1h</span>
                        </div>
                    
                    </div>
                    Unsent Tweets
                </div>
                <div className="content">
                    <p>{tweet.desc}</p>
                    <link href={tweet.img} alt=""/>
                    <span>Replying to {tweet.name}</span>
                    </div>
                    
                </ReplyComment>
                </div>
                <div className="item">
                    <RestartAltOutlinedIcon/> 100

                </div>
                <div className="item">
                    {isLoading ? "loading" : data.includes(currentUser.id) ? 
                    (<FavoriteOutlinedIcon style={{color:"red"}} onClick={handleLike}/> ) : 

                    (<FavoriteBorderOutlinedIcon  onClick={handleLike}/>
                    )} 
                    {data.length && data.length}

                </div>
                <div className="item">
                    <ShareOutlinedIcon/> 

                </div>
             </div>
             {/* {threadOpen && <Thread tweetId={tweet.id}/>} */}
            </div>
            
        </div>
    )
}

export default Tweet