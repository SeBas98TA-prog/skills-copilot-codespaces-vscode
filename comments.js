// Create web sever and listen to port 3000
const express = require('express');
const app = express();
const port = 3000;

// Create a new comment
app.post('/comments', (req, res) => {
  res.send('Create a new comment');
});

// Read all comments
app.get('/comments', (req, res) => {
  res.send('Read all comments');
});

// Read a comment
app.get('/comments/:id', (req, res) => {
  res.send('Read a comment');
});

// Update a comment
app.put('/comments/:id', (req, res) => {
  res.send('Update a comment');
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  res.send('Delete a comment');
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});