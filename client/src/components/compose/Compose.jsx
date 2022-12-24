import "./compose.scss";
import React from "react";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

function Compose(props) {
    const {currentUser} = useContext(AuthContext);
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
                
                <div className="write">
                    <img src={currentUser.profilePic} alt=""/>
                    <input type="text" placeholder="write a reply"/>
                    
                </div>

                <button className="send">Reply</button>
            
            
            </div>
        </div>   
    ) : "";
}

export default Compose