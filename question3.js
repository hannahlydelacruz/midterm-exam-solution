// Import the express module
const express = require('express');
const app = express();

// Define the /test route
app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! Hannahly Dela Cruz' });
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// To run this server, use: node question3.js
// Then visit http://localhost:3000/test in your browser or use curl/postman to test the endpoint.