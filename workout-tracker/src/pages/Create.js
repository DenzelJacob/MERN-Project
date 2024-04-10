// App.js
import React, { useState } from 'react';
import WorkoutList from '../WorkoutList';
import AddWorkoutForm from '../AddWorkoutForm';
import "../css/App.css"


// import react router and implement
function Create() {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  const deleteWorkout = (id) => {
    setWorkouts(workouts.filter((workout) => workout.id !== id));
  };
// make exercise template make -- TODO 
//make workout template maker  -- TODO
  return (
   


    
    <div> 
      
      <h1>Add exercise</h1>
      <AddWorkoutForm addWorkout={addWorkout} />
      <h2> Workouts </h2>
      <WorkoutList workouts={workouts} deleteWorkout={deleteWorkout} />
    </div>
    
   
  );
}

export default Create;
