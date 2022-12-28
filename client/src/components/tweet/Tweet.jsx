import "./tweet.scss"
import { Link } from "react-router-dom";
import Thread from "../thread/Thread";
import Compose from "../compose/Compose";
import {useState} from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { useContext } from "react";
import { TweetContext } from "../../context/tweetContext";

import moment from "moment";

const Tweet = ({tweet}) => {
    const [err, setErr] = useState(null);
    const [composePopup, setComposePopup] = useState(false);
    const [threadOpen, setThreadOpen] = useState(false);
    const {setTweeter} = useContext(TweetContext);


    // const handleTweet = (tweetId)=>{
    //     console.log("EXECUTE");
        
    //     try{
            
    //      setTweeter(tweetId); //await
    
    //     }catch(err){
    //         setErr(err.response.data);
    //     }
        
    // };
    //TEMPORARY
    const liked = false;
    return (
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
             <div className="content" onClick={() => setThreadOpen(!threadOpen)}>
                <p>{tweet.desc}</p>
                <img src={"./upload/" + tweet.img} alt=""/>
             </div>
             </Link>
             <div className="info" >
                <div className="item">
              
                <TextsmsOutlinedIcon onClick={() => setComposePopup(true)}/> 34
                <Compose trigger={composePopup} setTrigger={setComposePopup}>
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
                    
                </Compose>
                </div>
                <div className="item">
                    <RestartAltOutlinedIcon/> 100

                </div>
                <div className="item">
                    {liked ? <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon/>} 180

                </div>
                <div className="item">
                    <ShareOutlinedIcon/> 

                </div>
             </div>
             {threadOpen && <Thread tweetId={tweet.id}/>}
            </div>
            
        </div>
    )
}

export default Tweet