import "./navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

const Navbar = () => {
    return (
        <div className="NavBar">
            <div className="left">
                <span>Home</span>
            </div>
            <div className="right">
                <AutoAwesomeOutlinedIcon/>
            </div>
        </div>
    )
}

export default Navbar