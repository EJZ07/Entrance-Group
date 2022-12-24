import "./rightbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const RightBar = () => {
    return (
        <div className="rightbar">
            <div className="container">
                <div className="item1">
                    <div className="search">
                        <SearchOutlinedIcon/>
                        <input type="text" placeholder="Search Fake Twitter" />
                    </div>
                </div>
                
                <div className="item2">
                    <span>What's Happening?</span>
                    <div className="news">
                        <div className="newsInfo">
                            <span>MR. BEEEEEAAAAAST</span> 1 min ago 
                            <img src="https://i.kym-cdn.com/entries/icons/original/000/042/928/cover6.jpg" alt="" />
                        </div>
                    </div>
                    <div className="news">
                        <div className="newsInfo">
                            <span>MR. BEEEEEAAAAAST</span> 1 min ago 
                            <img src="https://i.kym-cdn.com/entries/icons/original/000/042/928/cover6.jpg" alt="" />
                        </div>
                    </div>
                    <div className="news">
                        <div className="newsInfo">
                            <p>
                                <span>MR. BEEEEEAAAAAST</span> 1 min ago 
                            </p>
                            

                            <img src="https://i.kym-cdn.com/entries/icons/original/000/042/928/cover6.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="item3">
                    <span>Who to follow?</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.pinimg.com/originals/fb/95/b7/fb95b7fea0ea1223185714531c4b6772.jpg" alt="" />
                            <span>Jane Doe</span>
                        </div>
                        <div className="button">
                            <button>follow</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://ftw.usatoday.com/wp-content/uploads/sites/90/2022/10/Super_Mario_Bros_Movie_bowser_44.png?w=1000&h=600&crop=1" alt="" />
                            <span>Jerry Doe</span>
                        </div> 
                        <div className="button">
                            <button>follow</button>
                        </div>
                    </div>
                    
                </div>

            </div>
        
            
        </div>
    )
}

export default RightBar