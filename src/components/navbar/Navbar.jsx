import "./navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { useLocation } from 'react-router-dom'
const Navbar = () => {

    const {toggle} = useContext(DarkModeContext);
    const location = useLocation();
    var path = location.pathname;
    const pathArray = path.split("/");

    function renderSwitch(param) {
        switch(param) {
          case '':
            return 'Home';
          case 'profile':
            return 'Profile';
          default:
            return 'Thread';
        }
      }

    return (
        <div className="NavBar">
            <div className="left">
                <span>{renderSwitch(pathArray[1])}</span>
            </div>
            <div className="right">
                <AutoAwesomeOutlinedIcon/>
            </div>
        </div>
    )
}

export default Navbar