const mongoose = require('mongoose');
require('dotenv').config();

// Use dbURI instead of process.env.MONGO_URI
const dbURI = process.env.MONGO_URI;

if (!dbURI) {
    console.error('MONGO_URI is not defined in the environment variables.');
    process.exit(1);
} 
// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(dbURI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB   
 