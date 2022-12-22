const router = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

router.get("/notes", (req, res) => {
  // do logic need to get notes
  fs.readFile("./db/db.json", "utf8", (error, data) => {
    if (error) {
      res.status(500).json(error);
      return;
    }
    res.send(data);
  });
});

router.post("/notes", (req, res) => {
  const { title, text } = req.body;
  const newNote = { title, text, id: uuidv4() };
  fs.readFile("./db/db.json", "utf8", (error, data) => {
    if (error) {
      res.status(500).json(error);
      return;
    }
    let notes = JSON.parse(data);
    if (!notes.length) {
      notes = [];
    } 
    notes.push(newNote);
    fs.writeFile("./db/db.json",JSON.stringify(notes),(error,data)=>{
        if (error) {
            res.status(500).json(error);
            return;
          } 
          res.json(data);
    })
  });
});

module.exports = router;
