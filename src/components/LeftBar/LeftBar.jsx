import "./leftbar.scss"
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Person2Icon from '@mui/icons-material/Person2';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";

const LeftBar = () => {
    const {toggle, darkMode} = useContext(DarkModeContext);
    const { currentUser} = useContext(AuthContext);
    return (
        <div className="leftbar">
        <ul>
            <li>
            <div className="nonTweet">
            <Link 
            to="/"
            style={{textDecoration:"none", color:"inherit"}}
            >
                <HomeOutlinedIcon/>
                Home
            </Link>
                
            </div>
            </li>
            <li>
            <div className="nonTweet" >
                <MailOutlineOutlinedIcon/>
                Messages
            </div>
            
            </li>
            <li >
            <div className="nonTweet" onClick={toggle}>
                {darkMode ? <WbSunnyOutlinedIcon  onClick={toggle}/> : <ModeNightOutlinedIcon onClick={toggle}/>}
                Theme
            </div>
            </li>
            <li>
            <div className="nonTweet" >
                <Link 
                to={`/profile/${currentUser.id}`}
                style={{textDecoration:"none", color:"inherit"}}>
                    <Person2Icon/>
                    Profile
                </Link>
            </div>
            
            </li>
            <li>
            <div className="tweet">
                <button>Tweet</button>
            </div>
            
            </li>
            <li>
                <div className="user">
                    <img src={currentUser.profilePic} alt="" />
                    <span>{currentUser.name}</span>
                </div>
            </li>

        </ul>

        
              
        </div>
    )
}

export default LeftBar