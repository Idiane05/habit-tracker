import { useState } from 'react';
import axios from '../api/axios';

export default function HabitForm() {
  const [title, setTitle] = useState('');
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !userId) return;

    try {
      const res = await axios.post('/habits', { title, userId: Number(userId) });
      setMessage(`Habit "${res.data.title}" created for user ${res.data.userId}`);
      setTitle('');
      setUserId('');
    } catch (err: any) {
      console.error(err.response || err.message || err);
      setMessage('Error creating habit');
    }
  };

  return (
    <div className="p-4 border rounded-xl shadow max-w-md mx-auto mt-6">
      <h2 className="text-xl font-bold mb-2">➕ Add New Habit</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          value={title}
          placeholder="Habit title"
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <input
          type="number"
          value={userId}
          placeholder="User ID"
          onChange={(e) => setUserId(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Create Habit
        </button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
}
