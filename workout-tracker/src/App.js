// App.js
import React, { useState } from 'react';
import  {
  BrowserRouter, 
  Routes,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Home from './Home';
import Navbar from './NavigationMenu';
import Create from './Create';
import NoPage from './NoPageFound';
import History from './History';


import "./css/App.css"
import Profile from './Profile';



// import react router and implement
function App() {

  return (
    <BrowserRouter>
      <Routes>


        
        <Route path='/' element={<Navbar/>} >
          <Route index element={<Home/>} />
          <Route path='create' element={<Create/>} />
          <Route path='history' element={<History/>} />
          <Route path='profile' element={<Profile/>} />
          <Route path='nopage' element={<NoPage/>} />
        </Route>
        

        

      </Routes>

    </BrowserRouter>
  
  );
}

export default App;
