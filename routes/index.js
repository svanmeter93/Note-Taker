const router = require("express").Router();
const API = require("./API.js");
const path = require("path")

router.get("/notes",(req,res)=> {
    res.sendFile(path.join(__dirname,"../public/notes.html"))
})

router.use("/api", API);

router.get("*", (req,res) => {
    res.sendFile(path.join(__dirname,"../public/index.html"))
})

module.exports=router