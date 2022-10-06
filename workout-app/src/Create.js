import { useState } from "react";
import {useHistory} from "react-router-dom";
const Create = () => {
    const [name, setName] = useState('');
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setweight] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault()
        const exercise ={name,sets,reps,weight};

        //fetch(){}
        console.log(exercise);



    }
    


    return (  
            <div>
                <center>

                    <h1>Add your new workout</h1> 

                    <form className="form">
                    <label>Name of Exercise:</label>
                    <input type="text" name="name" autoComplete="off" onChange={(e) => setName(e.target.value)}></input>
                    <br/>
                    
                    <label htmlFor="sets">Sets: </label>
                    <input type="number" id="sets" placeholder="0" onChange={(e) => setSets(e.target.value)}></input>
                    <br/>
                    <label htmlFor="reps">Repetitions:</label>
                    <input type="number" id="reps" placeholder="0" onChange={(e) => setReps(e.target.value)}></input>
                    <br/>
                    <label htmlFor="weight">Weight:</label>
                    <input type="number" id="weight" placeholder="0" onChange={(e) => setweight(e.target.value)}></input>
                    <br/>

                    <button className="submitbutton" onClick={handleSubmit}>Submit</button>
                
                </form>

                </center>
              

               
            </div>
        
        /*
        makeinputs

        name

        resistance or cardio
        resitance-
        sets-reps-load

        cardio-
        duration
        distance(if aplicable)
        
        
        */
    );
}
 
export default Create;