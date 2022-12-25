import "./thread.scss"
import Link from "react-router-dom";
import ExtraThread from "../extrathread/ExtraThread";

const Thread = () => {
    //TEMPORARY
    var state = true;
    
    // window.location.reload(false);
    const thread = [
        {
            id: 1, 
            name:"Dunkey", 
            userId: 1,
            profilePic:"https://sportshub.cbsistatic.com/i/2022/11/15/82c5a65f-9edc-434d-9265-4f39aac44912/spy-x-family-71-anya-hostage-crisis-twist-manga.jpg",
            desc: "So true Bestie",
        
        },
        {
            id: 2, 
            name:"Elon Musk", 
            userId: 2,
            profilePic:"https://pbs.twimg.com/media/E7BwlN3WEAEiEB7?format=jpg&name=small",
            desc: "Ratio",
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

    const liked = false;
    return <div className="thread">
    {thread.map(reply=>(
        <ExtraThread reply={reply} key={thread.id}/>
    ))}
    </div>;
};

export default Thread