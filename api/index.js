import  Express  from "express";
import userRoutes from "./routes/users.js";
import tweetRoutes from "./routes/tweets.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import authRoutes from "./routes/auth.js";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = Express();

//middlewares 
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Credentials", true)
    next()
})
app.use(Express.json())
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);
app.use(cookieParser())

app.use("/api/users", userRoutes)
app.use("/api/tweets", tweetRoutes)
app.use("/api/comments", commentRoutes)
app.use("/api/likes", likeRoutes)
app.use("/api/auth", authRoutes)

app.listen(8800, ()=>{
    console.log("API working!");
});