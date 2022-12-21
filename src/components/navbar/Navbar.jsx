import "./navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { useLocation } from 'react-router-dom'
const Navbar = () => {

    const {toggle} = useContext(DarkModeContext);
    const location = useLocation();
    return (
        <div className="NavBar">
            <div className="left">
                <span>{location.pathname[1]==":" ? "Thread" : "Home"}</span>
            </div>
            <div className="right">
                <AutoAwesomeOutlinedIcon/>
            </div>
        </div>
    )
}

export default Navbar