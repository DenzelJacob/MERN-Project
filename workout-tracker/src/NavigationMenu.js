import React from "react";

import'./css/NavigationMenu.css';
// make css for nav bar
// make the on clicks for the navbar buttons



const Navbar = () => {
    return (
    <div class="Navbar">
        
         <button class="menuButton" type="button" value={"test1"}>Home</button>
         <button class="menuButton" type="button" value={"test1"}>Create</button>
         <button class="menuButton" type="button" value={"test1"}>History</button>
         <button class="menuButton" type="button" value={"test1"}>Profile</button>
         
    </div>
    )
}
export default Navbar;