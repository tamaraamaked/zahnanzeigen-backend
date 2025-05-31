// backend/src/index.js
require('dotenv').config();     // ganz oben
const express = require('express');
const cors = require('cors'); 

const connectDB = require('./db');
const adRoutes = require('./routes/adRoutes');

console.log('Loaded MONGO_URI:', process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use(cors());  
app.use('/api', adRoutes);

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});




