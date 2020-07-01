const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express()
const PORT = process.env.PORT || 3000;


// Gets All Members //
// app.get('/api/members', (req, res) => {
//   res.json(members);
// });

// // Get a single member //
// app.get('/api/members/:id', (req, res) => {
//   res.json(members.filter(member => member.id === parseInt(req.params.id)))
// });
 
// // Set a static folder //
// app.use(express.static(path.join(__dirname, 'public')));
 
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));