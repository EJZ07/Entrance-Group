import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";

export const getTweets = (req, res)=>{
   
    const token = req.cookies.accessToken;
    console.log(token);
    // if(!token) return res.status(401).json("Not logged in!");

    const q = `SELECT t.*, u.id AS userId, name, profilePic FROM tweets AS t JOIN users AS u ON (u.id = t.userId)
    ORDER BY t.createdAt DESC`; //the id of t and u would have a conflict so we use u.id AS userId

    db.query(q, [], (err, data)=>{
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });

    // jwt.verify(token, "secretkey", (err, userInfo)=>{ 
    //     if(err) return res.status(403).json("Token is not valid!")

       
    // });
    
}

export const addTweet = (req, res) =>{
    const q = `INSERT INTO tweets ("desc", "img", "createdAt", "userId") VALUES ?`; 
    
    const values = [
        req.body.desc,
        req.body.img,
    ]//the id of t and u would have a conflict so we use u.id AS userId

    db.query(q, [], (err, data)=>{
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
}