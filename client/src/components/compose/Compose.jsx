import "./compose.scss";
import React from "react";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import {createContext, useEffect, useState} from "react";
import {useMutation, useQueryClient} from '@tanstack/react-query';
import axios from "axios";
import makeRequest  from "../../axios";

function Compose(props) {
    const [file, setFile] = useState(null)
    const [desc, setDesc] = useState("")

    const upload = async ()=>{
        try{
            const formData = new FormData();
            formData.append("file", file);
            console.log("DataImg", formData.data);
            // const res = await axios.post("http://localhost:8800/api/upload", formData)
            const res = await makeRequest.post("/upload", formData)
            
            return res.data
        }catch(err){
            console.log(err)
        }
    }
    const {currentUser} = useContext(AuthContext);

    const [err, setErr] = useState(null)

    const queryClient = useQueryClient()

    const mutation = useMutation((newTweet)=> {
        try{
            return makeRequest.post("/tweets", newTweet)
            // axios.post("http://localhost:8800/api/tweets", newTweet)
        }catch(err){
            setErr(err.response.data);
        }
    }, {
        onSuccess: () => {
          // Invalidate and refetch
          queryClient.invalidateQueries(["tweets"]);
        },
      })

    const handleClick = async (e) =>{
        e.preventDefault()
        let imgUrl = "";
        if(file) imgUrl = await upload();
        mutation.mutate({desc, img: imgUrl})
        props.setTrigger(false)
        setDesc("")
        setFile(null)
    }

    return (props.trigger) ? (
        <div className="compose">
            <div className="compose-inner">
                <div className="back">
                    <CloseOutlinedIcon onClick={() => props.setTrigger(false)}/>
                </div>
                <div className="title">
                    <h3>Compose Tweet</h3>
                </div>
                {props.children}
                
                <div className="top">
                    <div className="write">
                        <img src={currentUser.profilePic} alt=""/>
                        <input type="text" placeholder={`write a tweet ${currentUser.name}?`} 
                        onChange={(e)=>setDesc(e.target.value)}
                        value={desc} 
                        />
                    
                    </div>
                    <div className="imgSec">
                        {file && <img className="preview" alt="" src={URL.createObjectURL(file)}/>}
                    </div>
                </div>

                
                

                <div className="place">
                    <input type="file" id="file" style={{display:"none"}} onChange={(e) => setFile(e.target.files[0])} />
                    <label htmlFor="file">
                    
                        <div className="attachments">
                            <ImageOutlinedIcon />
                        </div>
                    </label>
                </div>


                <button className="send" onClick={handleClick}>Reply</button> 
            
            
            </div>
        </div>   
    ) : "";
}

export default Compose