import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Menu from './Menu';
import Home from './Home';
import Create from './Create';
import History from './History';
import NotFound from './NotFound';



function App() {
  return (
    <Router>

        <Menu />   

          <Routes>

          <Route exact path="/" element= {<Home/>} />
          <Route path="/create" element= {<Create />} />
          <Route path="/history" element= {<History />} />


          
          <Route path="*" element= {<NotFound />} />
        </Routes>

    </Router>
  );
}

export default App;
