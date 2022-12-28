import express from "express";
import  {getThread} from "../controllers/thread.js";

const router = express.Router()

router.get("/", getThread)

export default router