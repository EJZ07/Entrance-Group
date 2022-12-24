import "./profile.scss"
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import Tweets from "../../components/tweets/Tweets";

const Profile = () => {
    const {currentUser} = useContext(AuthContext);
    return (
        <div className="profile">
            <div className="images">
                <img src={currentUser.cover}
                    alt=""
                    className="cover"
                />
                <img src={currentUser.profilePic}
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