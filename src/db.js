// backend/src/db.js
require('dotenv').config();
console.log('⛳  MONGO_URI in db.js:', process.env.MONGO_URI);
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);  // keine Optionen mehr nötig
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

