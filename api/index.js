import  Express  from "express";
import userRoutes from "./routes/users.js";
import tweetRoutes from "./routes/tweets.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import authRoutes from "./routes/auth.js";
import threadRoutes from "./routes/threads.js";
import cors from "cors";
import multer from "multer";
import cookieParser from "cookie-parser";
const app = Express();

//middlewares 
app.use(cookieParser())
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Credentials", true)
    res.header("Access-Control-Allow-Origin", "http://localhost:3000")
    next()
})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/upload') //C:\Users\ecozi\Documents\Experess_TakeHome\client\public\upload
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({storage: storage })

app.post("/api/upload", upload.single("file"), (req, res) =>{
    const file = req.file
    res.status(200).json(file.filename)
})

app.use(Express.json()) //Order of where the cors middleware goes is important
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);


app.use("/api/users", userRoutes)
app.use("/api/tweets", tweetRoutes)
app.use("/api/comments", commentRoutes)
app.use("/api/likes", likeRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/threads", threadRoutes)

app.listen(8800, ()=>{
    console.log("API working!");
});