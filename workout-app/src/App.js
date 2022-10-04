import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Menu from './Menu';
import Home from './Home';
import Create from './Create';

function App() {
  return (
    <Router>

        <Menu />   

          <Routes>

          <Route path="/" element= {<Home/>} />
          <Route path="/create" element= {<Create />} />

        </Routes>

    </Router>
  );
}

export default App;
