// Start file: server.js

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./backend/config/db');
const categoryRoutes = require('./backend/route/categoryRoute');
const commentRoutes = require('./backend/route/commentRoute');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize the Express app
const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON

// Routes

app.get('/', (req, res) => {
    res.send('Welcome to the Blog API');
});

app.use('/categories', categoryRoutes);
app.use('/comments', commentRoutes);

const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
