const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors middleware
const log = require('./routes/log');

const app = express();
const port = 4011;

app.use(express.json());

// Configure CORS to allow requests from http://localhost:3001
app.use(cors({
  origin: 'http://localhost:3001',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

mongoose.connect('mongodb://localhost:27017/logs');
const db = mongoose.connection;

// Define a Mongoose model for the "logs" collection
const Log = mongoose.model('Log', {
  message: String,
  timestamp: { type: Date, default: Date.now },
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

app.use('/api', log);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
