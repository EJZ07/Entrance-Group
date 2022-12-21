import "./leftbar.scss"
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Person2Icon from '@mui/icons-material/Person2';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const LeftBar = () => {
    const {toggle, darkMode} = useContext(DarkModeContext);
    const { currentUser} = useContext(AuthContext);
    return (
        <div className="leftbar">
        <ul>
            <li>
            <div className="nonTweet">
                <HomeOutlinedIcon/>
                Home
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
                <Person2Icon/>
                Profile
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