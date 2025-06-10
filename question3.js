// This file sets up a simple Express.js server for the midterm exam.
// It demonstrates how to create a basic server and define a route.
// The /test route responds with a JSON message to confirm the server is working.
// This approach is useful for learning basic server setup and API endpoint creation.

const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! Hannahly Dela Cruz' });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

