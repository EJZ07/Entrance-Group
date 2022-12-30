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
import {useMutation, useQueryClient, useQuery} from '@tanstack/react-query';
import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const ExtraThread = ({reply}) => {
    const [replyOpen, setReplyOpen] = useState(false);
    const [composePopup, setComposePopup] = useState(false);
    const liked = false;
    const {currentUser} = useContext(AuthContext);
    
    const { isLoading, error, data } = useQuery(["likes", reply.id], async () =>

       await makeRequest.get("/likes?tweetId=" + reply.id).then((res) => {
            return res.data;
            
                
        })

        // axios.get("http://localhost:8800/api/likes?tweetId="+tweet.id).then((res) => { //Call axios directly because the makeRequest.get gets the client side endpoint
        //     return res.data;
        // })
     );

    const queryClient = useQueryClient()

    const mutation = useMutation((liked)=> {
        if(liked)
            return makeRequest.delete("/likes?tweetId="+ reply.id)
        return makeRequest.post("/likes", {tweetId : reply.id})
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
                <img src={"./upload/"+reply.img} alt=""/>
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
            {isLoading ? "loading" : data.includes(currentUser.id) ? 
                    (<FavoriteOutlinedIcon style={{color:"red"}} onClick={handleLike}/> ) : 

                    (<FavoriteBorderOutlinedIcon  onClick={handleLike}/>
                    )} 
                    {/* {data.length && data.length} */}

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
