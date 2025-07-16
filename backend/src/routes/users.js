const express = require('express');
const router = express.Router();
const users = require('../data/users');

// POST /api/users/register
router.post('/register', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  const newUser = {
    id: Date.now(), // simple unique ID
    name,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// GET /api/users
router.get('/', (req, res) => {
  res.json(users);
});

module.exports = router;
