import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";
import localStorage from 'localStorage';

export const getTweets = (req, res)=>{
     
    const token = localStorage.getItem('accessToken');
    if(!token) return res.status(401).json("Not logged in!");

    
    jwt.verify(token, "secretkey", (err, userInfo)=>{ 
        if(err) return res.status(403).json("Token is not valid!")
        const q = `SELECT t.*, u.id AS userId, name, profilePic FROM tweets AS t JOIN users AS u ON (u.id = t.userId)
                LEFT JOIN relationships AS r ON (t.userId = r.followedUserId) WHERE r.followerUserId = ? OR t.userId = ?
                ORDER BY t.createdAt DESC`; //the id of t and u would have a conflict so we use u.id AS userId

        db.query(q, [userInfo.id, userInfo.id], (err, data)=>{
            if (err) return res.status(500).json(err);
            return res.status(200).json(data);
        });
       
    });
    
}


export const addTweet = (req, res) =>{
   
    const token = localStorage.getItem('accessToken');
    if(!token) return res.status(401).json("Not logged in!");

    
    jwt.verify(token, "secretkey", (err, userInfo)=>{ 
        if(err) return res.status(403).json("Token is not valid!")
        const q = "INSERT INTO tweets(`desc`, `img`, `createdAt`, `userId`) VALUES (?)"; 

        const values = [
            req.body.desc,
            req.body.img,
            moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            userInfo.id
        ]

        db.query(q, [values], (err, data)=>{
            if (err) return res.status(500).json(err);
            return res.status(200).json("Tweet has been made unfortunately");
        });
       
    });
}
