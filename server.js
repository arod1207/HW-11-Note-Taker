const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// made a static path to public folder //
app.use(express.static(path.join(__dirname, "public")));

// sent html file notes.html //
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

// returning notes to front end //
app.get("/api/notes", function (req, res) {
res.sendFile(path.join(__dirname, "db/db.json"));
});

// creating the post //

app.post("/api/notes", (req, res) => {
  let newNote = req.body;

  fs.readFile("db/db.json", (err, data) => {
    if (err) throw err;
    let notes = JSON.parse(data);
    notes.push(newNote);

    fs.writeFile("db/db.json", JSON.stringify(notes) , (err) => {
      if (err) throw err;
      console.log("file written");
      return res.json(newNote);
    });
  });
});

// deleting a note //
app.delete("/api/notes/:newNote", function(req, res) {
  var noteToDelete = req.params.newNote;
  console.log(noteToDelete)
});


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
