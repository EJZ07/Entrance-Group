import express from "express";
import  {getTweets, addTweet} from "../controllers/tweet.js";

const router = express.Router()

router.get("/", getTweets)
router.post("/", addTweet)

export default router