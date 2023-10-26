const express=require("express")
const {connection}=require("./db")
require("dotenv").config()
const {userRouter}=require("./routes/user.routes")
const {noteRouter}=require("./routes/note.rouets")
const cors=require("cors");

const app=express()

app.use(cors())

app.use(express.json())

app.use("/users",userRouter)
app.use("/notes",noteRouter)

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("Connected to the DB")
        console.log(`Server is running at port ${process.env.port}`)
    } catch(err){
        console.log(err)
    }
})