// This file sets up a Node.js application using Express and Sequelize to connect to a MySQL database.
// It defines a Sequelize model for the users table with fields id, name, email, and status.
// The /users route fetches and returns all users from the database.
// Make sure to update the database credentials before running the server.

const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

// Initialize Express app
const app = express();
const PORT = 3000;

// Set up Sequelize to connect to MySQL database
const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

// Define a Sequelize model for the users table
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Define a route to fetch all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching users.' });
    }
});

// Sync the database and start the server
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch(error => {
    console.error('Unable to connect to the database:', error);
});