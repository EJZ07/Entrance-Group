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

const Tweet = ({tweet}) => {
    const [composePopup, setComposePopup] = useState(false);
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
                        <span className="date"> . 1h</span>
                    </div>
                    
                </div>
                <MoreHorizOutlinedIcon/>
            </div>
            <Link to={`:${tweet.userId}/comments/:${tweet.id}`}
              style={{textDecoration:"none", color:"inherit"}}
              
            >
             <div className="content">
                <p>{tweet.desc}</p>
                <img src={tweet.img} alt=""/>
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
            </div>
            
        </div>
    )
}

export default Tweet