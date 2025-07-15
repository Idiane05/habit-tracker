import { useState } from 'react';
import axios from '../api/axios';

export default function UserForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;

    try {
      const res = await axios.post('/users/register', { name });
      setMessage(`User "${res.data.name}" registered with ID ${res.data.id}`);
      setName('');
    } catch (err) {
      setMessage('Error registering user');
    }
  };

  return (
    <div className="p-4 border rounded-xl shadow max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">🧍 Register New User</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          value={name}
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Register
        </button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
}
