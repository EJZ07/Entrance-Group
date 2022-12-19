import "./leftbar.scss"
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Person2Icon from '@mui/icons-material/Person2';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const LeftBar = () => {
    return (
        <div className="leftbar">
        <ul>
            <li>
            <HomeOutlinedIcon/>
            <span>Home</span>
            </li>
            <li>
            <MailOutlineOutlinedIcon/>
            <span>Messages</span>
            </li>
            <li>
            <Person2Icon/>
            <span>Profile</span>
            </li>
            <li>
            <button>Tweet</button>
            </li>
            <li>
                <div className="user">
                    <img src="https://sportshub.cbsistatic.com/i/2022/11/15/82c5a65f-9edc-434d-9265-4f39aac44912/spy-x-family-71-anya-hostage-crisis-twist-manga.jpg" alt="" />
                    <span>John Doe</span>
                </div>
            </li>

        </ul>

        
              
        </div>
    )
}

export default LeftBar