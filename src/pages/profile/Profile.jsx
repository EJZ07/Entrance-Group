import "./profile.scss"
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import Tweets from "../../components/tweets/Tweets";

const Profile = () => {
    const {currentUser} = useContext(AuthContext);
    return (
        <div className="profile">
            <div className="images">
                <img src="https://supersaiyanshop.b-cdn.net/wp-content/uploads/2020/03/The-Hyperbolic-Spirit-and-time-room-1024x576-1.png"
                    alt=""
                    className="cover"
                />
                <img src="https://sportshub.cbsistatic.com/i/2022/11/15/82c5a65f-9edc-434d-9265-4f39aac44912/spy-x-family-71-anya-hostage-crisis-twist-manga.jpg"
                    alt=""
                    className="profilePic"
                />
            </div>
            <div className="profileContainer">
                <div className="uInfo">
                    <div className="left">
                        <span className="username">{currentUser.name}</span>
                        <p className="bio">{currentUser.bio}</p>
                    </div>
                    <div className="right">
                        <button>follow</button>
                    </div>
                </div>
                <div className="follows">
                    <span>{currentUser.following}</span> <p>following</p>
                    <span>{currentUser.followers}</span> <p>followers</p>        
                </div>
                <div className="tabs">
                    <span>Tweets</span>
                </div>
                <Tweets/>
            </div>
            
        </div>
    )
}

export default Profile