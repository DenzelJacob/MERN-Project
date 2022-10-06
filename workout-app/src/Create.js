
const handleSubmit = (e) =>{
        console.log(e.target);
        e.preventDefault()

    }
const Create = () => {

    



    return (  
            <div>
                <center>

                    <h1>Add your new workout</h1> 

                    <form className="form">
                    <label>Name of Exercise:</label>
                    <input type="text" name="name" autoComplete="off"></input>
                    <br/>
                    
                    <label htmlFor="sets">Sets: </label>
                    <input type="number" id="sets" placeholder="1"></input>
                    <br/>
                    <label htmlFor="reps">Repetitions:</label>
                    <input type="number" id="reps" placeholder="1"></input>
                    <br/>
                    <label htmlFor="weight">Weight:</label>
                    <input type="number" id="weight" placeholder="0"></input>
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