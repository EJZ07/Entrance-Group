import express from "express";
import  {getTweets, addTweet} from "../controllers/auth.js";

const router = express.Router()

router.get("/", getTweets)
router.get("/", addTweet)

export default router