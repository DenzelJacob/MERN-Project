// App.js
import React, { useState } from 'react';
import WorkoutList from './WorkoutList';
import AddWorkoutForm from './AddWorkoutForm';

function App() {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  const deleteWorkout = (id) => {
    setWorkouts(workouts.filter((workout) => workout.id !== id));
  };

  return (
    <div>
      <h1>Workout App</h1>
      <AddWorkoutForm addWorkout={addWorkout} />
      <WorkoutList workouts={workouts} deleteWorkout={deleteWorkout} />
    </div>
  );
}

export default App;
