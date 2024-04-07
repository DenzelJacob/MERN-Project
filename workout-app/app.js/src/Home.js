const Home = () => {

    const body = fetch('http://localhost:8000/exercises');
    console.log(body.data);
    console.log("test");
    return (  
        <div>

        <h2>Welcome to your homepage</h2>
        <h2>Recent Workouts</h2>
        {/* <p>{body}</p> */}
        {/* add script to pull entries from db.json */}

    
       

        </div>
    );
}
 
export default Home;