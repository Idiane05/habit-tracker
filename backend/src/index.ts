// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Simple test route
// app.get('/api/ping', (req, res) => {
//   res.json({ message: 'Habit Tracker backend is running!' });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Habit Tracker backend is running!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running at: http://localhost:${PORT}`);
});
