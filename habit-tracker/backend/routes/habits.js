const express = require('express');
const Habit = require('../models/Habit');  // Assuming you have a Habit model
const router = express.Router();

// Delete a habit
router.delete('/:id', async (req, res) => {
  try {
    const habit = await Habit.findByIdAndDelete(req.params.id);
    if (!habit) {
      return res.status(404).send({ message: 'Habit not found' });
    }
    res.status(200).send({ message: 'Habit deleted successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error deleting habit', error });
  }
});

module.exports = router;
