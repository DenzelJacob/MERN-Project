// AddWorkoutForm.js
import React, { useState } from 'react';

function AddWorkoutForm({ addWorkout }) {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !duration) return;
    addWorkout({ name, duration, id: Date.now() });
    setName('');
    setDuration('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Workout Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Duration (mins)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <button type="submit">Add Workout</button>
    </form>
  );
}

export default AddWorkoutForm;
