// import { useEffect, useState } from 'react';
// import UserForm from './components/UserForm';
// import HabitForm from './components/HabitForm'; // ✅ import it

// function App() {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     fetch('http://localhost:5000/')
//       .then(res => res.json())
//       .then(data => setMessage(data.message))
//       .catch(() => setMessage("Couldn't connect to backend"));
//   }, []);

//   return (
//     <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
//       <h1>🌱 Habit Tracker Frontend</h1>
//       <p>Message from backend:</p>
//       <strong>{message}</strong>

//       <hr style={{ margin: '2rem 0' }} />
//       <UserForm />
//       <HabitForm /> {/* ✅ show habit form */}
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from 'react';
import UserForm from './components/UserForm';
import HabitForm from './components/HabitForm';
import HabitList from './components/HabitList'; // ✅ import it

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage("Couldn't connect to backend"));
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🌱 Habit Tracker Frontend</h1>
      <p>Message from backend:</p>
      <strong>{message}</strong>

      <hr style={{ margin: '2rem 0' }} />
      <UserForm />
      <HabitForm />
      <HabitList /> {/* ✅ show habit list */}
    </div>
  );
}

export default App;
