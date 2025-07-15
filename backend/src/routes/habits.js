const express = require('express');
const router = express.Router();
const habits = require('../data/habits');

// POST /api/habits - create new habit
router.post('/', (req, res) => {
  const { title, userId } = req.body;

  if (!title || !userId) {
    return res.status(400).json({ error: 'Title and userId are required' });
  }

  const newHabit = {
    id: Date.now(),
    title,
    userId
  };

  habits.push(newHabit);
  res.status(201).json(newHabit);
});

// GET /api/habits - fetch all habits
router.get('/', (req, res) => {
  res.json(habits);
});

module.exports = router;
