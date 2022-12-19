import "./rightbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const RightBar = () => {
    return (
        <div className="rightbar">
        <div className="search">
            <SearchOutlinedIcon/>
            <input type="text" placeholder="Search...." />
        </div>
            
        </div>
    )
}

export default RightBar