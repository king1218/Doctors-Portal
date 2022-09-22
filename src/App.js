
import { Routes,Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AppointmentDetails from './Pages/AppointmentDetails/AppointmentDetails';
import Login from './Pages/Authentication/Login/Login';
import Home from './Pages/Home/Home';
import Navber from './Pages/Shared/Navber/Navber';

function App() {
  return (
    <div>
     <Navber></Navber>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/appointment' element={<AppointmentDetails/>}></Route>
     

     </Routes>
    </div>
  );
}

export default App;
