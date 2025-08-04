import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [habit, setHabit] = useState('');  // State for the input field
  const [habits, setHabits] = useState([]); // State for storing the list of habits

  // Function to handle adding a habit
  const handleAddHabit = async () => {
    if (habit.trim()) {
      try {
        const response = await axios.post('http://localhost:5000/api/habits', {
          name: habit,
          done: false
        });
        setHabits([...habits, response.data]);  // Add the new habit to the state
        setHabit('');  // Clear the input field
      } catch (error) {
        console.error("Error adding habit:", error);
      }
    }
  };

  // Function to toggle the completion status of a habit
  const toggleHabit = async (index: number) => {
    const habitToUpdate = habits[index];
    try {
      const response = await axios.put(`http://localhost:5000/api/habits/${habitToUpdate._id}`, {
        done: !habitToUpdate.done
      });
      const updatedHabits = habits.map((h, i) =>
        i === index ? response.data : h
      );
      setHabits(updatedHabits);
    } catch (error) {
      console.error("Error updating habit:", error);
    }
  };

  // Function to delete a habit
  const deleteHabit = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/habits/${id}`);
      // Remove the deleted habit from the state
      setHabits(habits.filter(h => h._id !== id));
    } catch (error) {
      console.error("Error deleting habit:", error);
    }
  };

  // Fetch habits from the backend when the component mounts
  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/habits');
        setHabits(response.data);
      } catch (error) {
        console.error("Error fetching habits:", error);
      }
    };

    fetchHabits();
  }, []);

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: 'auto' }}>
      <h1>📝 Habit Tracker</h1>

      {/* Input field to add a new habit */}
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          value={habit}
          onChange={(e) => setHabit(e.target.value)}
          placeholder="Enter a habit"
          style={{ padding: '0.5rem', width: '70%' }}
        />
        <button
          onClick={handleAddHabit}
          style={{ padding: '0.5rem', marginLeft: '0.5rem' }}
        >
          Add
        </button>
      </div>

      {/* Display the list of habits */}
      <ul>
        {habits.map((h, index) => (
          <li key={h._id} style={{ marginBottom: '0.5rem' }}>
            <label style={{ textDecoration: h.done ? 'line-through' : 'none' }}>
              <input
                type="checkbox"
                checked={h.done}
                onChange={() => toggleHabit(index)}
                style={{ marginRight: '0.5rem' }}
              />
              {h.name}
            </label>
            <button
              onClick={() => deleteHabit(h._id)}
              style={{ marginLeft: '0.5rem', color: 'red' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
