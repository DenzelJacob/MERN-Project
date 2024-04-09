// AddWorkoutForm.js
import React, { useState } from 'react';

function AddWorkoutForm({ addWorkout }) {
  const [name, setName] = useState('');
  //add reps , load, and change duration to rest time, add (RPE or rating)
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !duration) return; // add all param
    addWorkout({ name, duration, id: Date.now() }); // fix id of workouts LATER
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
        placeholder="repetitions"
        />

        <input
        placeholder="weight"
        />

        <input
        type="number"
        placeholder="Rest (seconds)"
        //default to 60  or 120 secs
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        />

        <button type="submit">Add Workout</button>

    </form>
  );
}

export default AddWorkoutForm;
