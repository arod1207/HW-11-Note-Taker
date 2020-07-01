const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// made a static path to public folder //
app.use(express.static(path.join(__dirname, 'public')));

// sent html file notes.html //
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/notes.html'))
})

// creating api routes //
app.get('/api/notes', (req, res) => {
  fs.readFile('db/db.json', (err, data) => {
    if (err) throw err;
    let notes = JSON.parse(data)
    return res.json(notes)
  })
})


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));