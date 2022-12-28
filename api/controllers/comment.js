import { db } from "../connect.js";

export const getComments = (req, res)=>{

        const q = `SELECT c.*, u.id AS userId, name, profilePic FROM comments AS c JOIN users AS u ON (u.id = c.userId)
                WHERE c.tweetId = ? ORDER BY c.createdAt DESC`; //the id of t and u would have a conflict so we use u.id AS userId

        db.query(q, [req.query.tweetId], (err, data)=>{
            if (err) return res.status(500).json(err);
            return res.status(200).json(data);
        });
    
}