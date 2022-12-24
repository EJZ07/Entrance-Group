import { CommentsDisabled } from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useState} from "react";
import "./replys.scss"
import Compose from "../compose/Compose";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';


const Replys = () => {
    const [replyOpen, setReplyOpen] = useState(false);
    const [composePopup, setComposePopup] = useState(false);
    const liked = false;
    const replys = [
        {
            id: 1, 
            name:"Lucky", 
            userId: 1,
            profilePic:"https://cdn.motor1.com/images/mgl/G4z31/s3/tesla-roadster.jpg",
            desc: "NAAAAAAHHH BRO RETWEETS JURI GETTING BLACKED",
            img:"https://pbs.twimg.com/media/Fkd-YDYUAAA72qv?format=jpg&name=120x120",
        
        },
        {
            id: 2, 
            name:"Elon Musk", 
            userId: 2,
            profilePic:"https://image.cnbcfm.com/api/v1/image/107149350-1668034438907-musk2.jpg?v=1671547311",
            desc: "Ratio",
            img:"https://supersaiyanshop.b-cdn.net/wp-content/uploads/2020/03/The-Hyperbolic-Spirit-and-time-room-1024x576-1.png",
        },
        {
            id: 3, 
            name:"Corn", 
            userId: 3,
            profilePic:"https://miro.medium.com/max/636/1*Z14pvsjLwMRE0KV2HhU_LA.png",
            desc: "Jfc half my tweets in half the years this dudes got it worse",
        },
    ];
    return (
        <div className="replys">
            {replys.map((reply) => (
                <div className="replys">
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
                        <span className="date">1m</span>
                    </div>
                
                </div>
                <MoreHorizOutlinedIcon/>
            </div>
            <Link onClick={()=>setReplyOpen(!replyOpen)}
                      style={{textDecoration:"none", color:"inherit"}} 
                    >
                <div className="content">
                <p>{reply.desc}</p>
                <img src={reply.img} alt=""/>
                
            </div>
            </Link>
        <div className="info">
            <div className="item" >
            <TextsmsOutlinedIcon onClick={() => setComposePopup(true)}/> 
                <Compose trigger={composePopup} setTrigger={setComposePopup}>
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
                    
                </Compose>

            </div>
            <div className="item">
                <RestartAltOutlinedIcon/> 23

            </div>
            <div className="item">
                {liked ? <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon/>} 100

            </div>
            <div className="item">
                <ShareOutlinedIcon/> 

            </div>
        </div>
            {replyOpen && <Replys />}
        </div>
        
    </div>       
            ))}
        </div>
    )
}

export default Replys