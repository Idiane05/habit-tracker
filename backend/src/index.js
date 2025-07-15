// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middlewares
// app.use(cors());
// app.use(express.json());

// // ✅ Routes
// const userRoutes = require('./routes/users');
// app.use('/api/users', userRoutes);

// // ✅ Default test route
// app.get('/', (req, res) => {
//   res.json({ message: 'Habit Tracker backend is running!' });
// });

// app.listen(PORT, () => {
//   console.log(`✅ Server is running at: http://localhost:${PORT}`);
// });
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// 🔧 Middlewares
app.use(cors());
app.use(express.json());

// ✅ User routes
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

// ✅ Habit routes
const habitRoutes = require('./routes/habits');
app.use('/api/habits', habitRoutes);

// 🏁 Default test route
app.get('/', (req, res) => {
  res.json({ message: 'Habit Tracker backend is running!' });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running at: http://localhost:${PORT}`);
});
