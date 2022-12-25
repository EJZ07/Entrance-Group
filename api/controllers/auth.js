import db from "../connect.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import localStorage from 'localStorage';

export const register = (req, res)=>{
    //CHECK IF USER EXISTS
    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q , [req.body.username], (err, data)=>{
        if(err) return res.status(500).json(err)
        if(data.length) return res.status(409).json("User already exists!")

        //CRETAE A NEW USER

        //HASH THE PASSWORD
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt)

        const q = "INSERT INTO users (`username`, `email`, `password`, `name`) VALUE (?)"

        const values = [req.body.username, req.body.email, hashedPassword, req.body.name]

        db.query(q,[values], (err, data)=>{
            if(err) return res.status(500).json(err)
            return res.status(200).json("User has been created.");
        })
    })

}

export const login = (req, res)=>{
    const q = "SELECT * FROM users WHERE username = ?"
    db.query(q, [req.body.username], (err, data)=>{
        if(err) return res.status(500).json(err)
        if(data.length ===0 ) return res.status(404).json("User not found!");

        const checkPassword = bcrypt.compareSync(req.body.password, data[0].password)

        if(!checkPassword) return res.status(400).json("Wrong password or username!")

        const token = jwt.sign({id:data[0].id}, "secretkey"); //Verfy  if the user that created a tweet is authorized to edit/delete the tweet
        // console.log(token);
        const {password, ...others} = data[0];
        
        localStorage.setItem('accessToken', token); 
    
        res.cookie("accessToken", token, {sameSite:"Strict",} ).status(200).json(others);

        
        

        // console.log(`this is the cookie awesome ${req.cookies.accessToken}`);
    })
}


export const logout = (req, res)=>{
    res.clearCookie("accessToken",{
        secure:true,
        sameSite:"none"
    }).status(200).json("User has been logged out!")
}

export const getTweets = (req, res)=>{
   
    
    console.log("DOES IT WORK???: ", localStorage.getItem('accessToken') )
    const token = req.cookies;
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
        moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
    ]//the id of t and u would have a conflict so we use u.id AS userId

    db.query(q, [], (err, data)=>{
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
}