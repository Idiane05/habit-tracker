import { useEffect, useState } from 'react';
import axios from '../api/axios';

interface Habit {
  id: number;
  title: string;
  userId: number;
}

export default function HabitList() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('/habits')
      .then((res) => setHabits(res.data))
      .catch(() => setError('Failed to fetch habits'));
  }, []);

  return (
    <div className="p-4 max-w-md mx-auto mt-6 border rounded-xl shadow">
      <h2 className="text-xl font-bold mb-2">📋 Habit List</h2>
      {error && <p className="text-red-600">{error}</p>}
      {habits.length === 0 ? (
        <p>No habits yet.</p>
      ) : (
        <ul className="list-disc list-inside">
          {habits.map((habit) => (
            <li key={habit.id}>
              <strong>{habit.title}</strong> (User ID: {habit.userId})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
