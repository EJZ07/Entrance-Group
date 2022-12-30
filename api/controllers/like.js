import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import localStorage from 'localStorage';

export const getLikes = (req, res)=>{
    
        const q = "SELECT userId FROM likes WHERE tweetId = ?";

        db.query(q, [req.query.tweetId], (err, data)=>{
            if (err) return res.status(500).json(err);
            return res.status(200).json(data.map(like=>like.userId));
        });
       
}

export const addLike = (req, res) =>{
   
    const token = localStorage.getItem('accessToken');
    if(!token) return res.status(401).json("Not logged in!");

    
    jwt.verify(token, "secretkey", (err, userInfo)=>{ 
        if(err) return res.status(403).json("Token is not valid!")
        const q = "INSERT INTO likes(`userId`, `tweetId`) VALUES (?)"; 

        const values = [
            userInfo.id,
            req.body.tweetId
            
        ];

        db.query(q, [values], (err, data)=>{
            if (err) return res.status(500).json(err);
            return res.status(200).json("A tweet was liked");
        });
       
    });
}

export const deleteLike = (req, res) =>{
   
    const token = localStorage.getItem('accessToken');
    if(!token) return res.status(401).json("Not logged in!");

    
    jwt.verify(token, "secretkey", (err, userInfo)=>{ 
        if(err) return res.status(403).json("Token is not valid!")
        const q = "DELETE FROM likes WHERE `userId`= ? AND `tweetId` = ?"; 

        db.query(q, [userInfo.id, req.query.tweetId], (err, data)=>{
            if (err) return res.status(500).json(err);
            return res.status(200).json("Tweet was disliked");
        });
       
    });
}