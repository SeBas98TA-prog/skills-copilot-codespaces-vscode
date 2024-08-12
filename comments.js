// Create web sever using express
// Create a route that listens to /comments
// Send back some dummy data as json
// Start the server and test the route using postman

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
    res.json({ message: 'Comments route' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Start the server: node comments.js
// Test the route using postman: http://localhost:3000/comments

// Output:
// {
//     "message": "Comments route"
// }

// To stop the server: ctrl + c