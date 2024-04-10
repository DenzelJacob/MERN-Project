// App.js
import React, { useState } from 'react';



import  {
  BrowserRouter, 
  Routes,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

import "./css/App.css"
import Home from './Home';
import Navbar from './NavigationMenu';
import Create from './Create';
import NoPage from './History';


// import react router and implement
function App() {

  return (
    <BrowserRouter>
      <Routes>


        
        <Route path='/' element={<Navbar/>} >
          <Route index element={<Home/>} />
          <Route path='create' element={<Create/>} />
          <Route path='history' element={<Create/>} />
          <Route path='profile' element={<Create/>} />
          <Route path='nopage' element={<NoPage/>} />
        </Route>
        

        

      </Routes>

    </BrowserRouter>
  
  );
}

export default App;
