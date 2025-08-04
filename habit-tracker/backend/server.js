const express = require('express');
const mongoose = require('mongoose');
const habitsRouter = require('./routes/habits');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/habit-tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once('open', () => console.log('MongoDB Connected'));
db.on('error', (error) => console.error('MongoDB Connection Error:', error));

app.use('/api/habits', habitsRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
