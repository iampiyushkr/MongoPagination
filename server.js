const express=require("express")

const connect=require("./src/db.js")

const app=express()
app.use(express.json());
const userControl=require("./src/controllers/user.controller")
const adminControl=require("./src/controllers/admin.controller")

app.use("/users",userControl)
app.use("/admins",adminControl)

app.listen(4567,async ()=> {
    await connect()
    console.log("We listining 4567")
})