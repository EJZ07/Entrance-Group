import "./tweets.scss"
import { Link } from "react-router-dom";
import Tweet from "../tweet/Tweet";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Revery from "../../assets/R2.png";

const Tweets = () => {
    const tweets = [
        {
            id: 1, 
            name:"Gin Freecs", 
            userId: 1,
            profilePic:"https://sportshub.cbsistatic.com/i/2022/11/15/82c5a65f-9edc-434d-9265-4f39aac44912/spy-x-family-71-anya-hostage-crisis-twist-manga.jpg",
            desc: "i shidded and farded",
        
        },
        {
            id: 2, 
            name:"Goku", 
            userId: 2,
            profilePic:"https://pbs.twimg.com/media/E7BwlN3WEAEiEB7?format=jpg&name=small",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            img:"https://supersaiyanshop.b-cdn.net/wp-content/uploads/2020/03/The-Hyperbolic-Spirit-and-time-room-1024x576-1.png",
        },
        {
            id: 3, 
            name:"Corn", 
            userId: 3,
            profilePic:"https://miro.medium.com/max/636/1*Z14pvsjLwMRE0KV2HhU_LA.png",
            desc: "The phrase “it's just a game” is such a weak mindset. You are ok with what happened, losing, imperfection of a craft. When you stop getting angry after losing, you've lost twice. There's always something to learn, and always room for improvement, never settle.",
            img: "https://m.media-amazon.com/images/M/MV5BMjgwNzFjZGYtNTRhNC00YzA0LTliNmYtNTUyYjZiMWM1MDEwXkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_.jpg",
        },
    ];
    return <div className="tweets">
        {tweets.map(tweet=>(
            <Tweet tweet={tweet} key={tweets.id}/> //Seperating the tweets generated from the tweets that get displayed
            
        ))}
    </div>;
};

export default Tweets