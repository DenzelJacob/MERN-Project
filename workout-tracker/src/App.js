// App.js
import React, { useState } from 'react';
import WorkoutList from './WorkoutList';
import AddWorkoutForm from './AddWorkoutForm';
import Navbar from './NavigationMenu';

// import react router and implement
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
      <Navbar/>
      <h1>Fitness Tracker</h1>
      <AddWorkoutForm addWorkout={addWorkout} />
      <h2> Workouts </h2>
      <WorkoutList workouts={workouts} deleteWorkout={deleteWorkout} />
    </div>
  );
}

export default App;
