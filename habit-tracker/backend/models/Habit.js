const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  done: { type: Boolean, default: false }
});

module.exports = mongoose.model('Habit', habitSchema);
