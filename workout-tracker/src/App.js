// App.js
import  {
  BrowserRouter, 
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home.js';
import Navbar from './NavigationMenu.js';
import Create from './pages/Create.js';
import NoPage from './pages/NoPageFound.js';
import History from './pages/History.js';
import Profile from './pages/Profile';



import "./css/App.css"


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
