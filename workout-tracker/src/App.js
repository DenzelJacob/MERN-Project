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


// import react router and implement
function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>} />
          

        

      </Routes>

    </BrowserRouter>
  
  );
}

export default App;
