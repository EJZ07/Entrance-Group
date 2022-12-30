import "./extrathread.scss"
import {useState} from "react";
import { Link } from "react-router-dom";
import Replys from "../replys/Replys";
import ReplyComment from "../replycomment/ReplyComment";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import moment from "moment";

const ExtraThread = ({reply}) => {
    const [replyOpen, setReplyOpen] = useState(false);
    const [composePopup, setComposePopup] = useState(false);
    const liked = false;
    console.log("./upload/" + reply.img)
    return (
        <div className="extrathread">
           
            <div className="container">
           
            <div className="user">
                <div className="userInfo">
                    <img src={reply.profilePic} alt="" />
                    <div className="details">
                        <Link 
                        to={`/profile/${reply.userId}`} 
                        style={{textDecoration:"none", color:"inherit"}}
                        >
                        <span className="name">{reply.name}</span>
                            
                        </Link>
                        <span className="date">{moment(reply.createdAt).fromNow()}</span>
                    </div>
                
                </div>
                <MoreHorizOutlinedIcon/>
            </div>
            <Link onClick={()=>setReplyOpen(!replyOpen)}
              style={{textDecoration:"none", color:"inherit"}} 
            >
            <div className="content">
                <p>{reply.desc}</p>
                <img src={"./upload/"+reply.img} alt="Mountain"/>
            </div>
            </Link>
        <div className="info">
            <div className="item" >
            <TextsmsOutlinedIcon onClick={() => setComposePopup(true)}/> 3
                <ReplyComment trigger={composePopup} setTrigger={setComposePopup}>
                <div className="user">
                    <div className="userInfo">
                        <img src={reply.profilePic} alt="" />
                        <div className="details">
                            <Link 
                            to={`/profile/${reply.userId}`} 
                            style={{textDecoration:"none", color:"inherit"}}
                            >
                            <span className="name">{reply.name}</span>
                        
                            </Link>
                            <span className="date"> . 1h</span>
                        </div>
                    
                    </div>
                    Unsent Tweets
                </div>
                <div className="content">
                    <p>{reply.desc}</p>
                    <link href={reply.img} alt=""/>
                    <span>Replying to {reply.name}</span>
                    </div>
                    
                </ReplyComment>

            </div>
            <div className="item">
                <RestartAltOutlinedIcon/> 54

            </div>
            <div className="item">
                {liked ? <FavoriteOutlinedIcon style={{color:"red"}}/> : <FavoriteBorderOutlinedIcon/>} 1.1k

            </div>
            <div className="item">
                <ShareOutlinedIcon/> 

            </div>
        </div>
        {replyOpen && <Replys />}
        </div>
        
        
    </div>       

    )
};

export default ExtraThread
