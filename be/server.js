const express= require("express")
const dotenv=require("dotenv")

const app = express ()
dotenv.config();
const PORT = process.env.PORT||8000;

app.get("/",(req,res)=>{
    res.send("Sup")
})

app.get("/hello",(req,res)=>{
    res.send("dfasdf")
})
app.listen (PORT,() =>console.log(`server is running on port ${PORT}`));

