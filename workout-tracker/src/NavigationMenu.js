import React from "react";
import { Outlet, Link } from "react-router-dom";
import'./css/NavigationMenu.css';
// make css for nav bar
// make the on clicks for the navbar buttons



const Navbar = () => {
    return (
    <div >
        
        <div class="Navbar">
            <Link to="/"><button class="menuButton" type="button" value={"test1"}>Home</button></Link>
            <Link to="/create"><button class="menuButton" type="button" value={"test1"}>Create</button></Link>
            <Link to="/history"><button class="menuButton" type="button" value={"test1"}>History</button></Link>
            <Link to="/profile"><button class="menuButton" type="button" value={"test1"}>Profile</button></Link>
            
        </div>
         

         <Outlet/>

    </div>
    )
}
export default Navbar;