const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const subscriberRoutes = require('./routes/subscriberRoutes');
const contactRoutes = require('./routes/contactRoutes');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Routes
app.use('/api/subscribers', subscriberRoutes);
app.use('/api/contacts', contactRoutes);

// Base route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to HowdyPower API' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});