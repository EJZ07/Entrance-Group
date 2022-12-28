import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";
import localStorage from 'localStorage';

export const getThread = (req, res) =>{

    const q = "SELECT * FROM tweets WHERE id = ?"; 

    db.query(q , [req.body.id], (err, data)=>{
        if(err) return res.status(500).json(err)
        return res.status(200).json(data);
    })


}