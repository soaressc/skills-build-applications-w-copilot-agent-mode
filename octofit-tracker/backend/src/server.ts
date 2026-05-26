import express, { Express } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/octofit-tracker';

// Middleware
app.use(express.json());

// MongoDB connection
mongoose
  .connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ message: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
