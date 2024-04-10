import  {
  BrowserRouter, 
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './NavigationMenu.js';
import Home from './pages/Home.js';
import Create from './pages/Create.js';
import NoPage from './pages/NoPageFound.js';
import History from './pages/History.js';
import Profile from './pages/Profile.js';

function NavigationRouter() {

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

export default NavigationRouter;
