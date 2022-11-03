
import { Routes,Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AppointmentDetails from './Pages/AppointmentDetails/AppointmentDetails';
import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';
import RequireAuth from './Pages/Authentication/ReqiureAuth/RequireAuth';
import Home from './Pages/Home/Home';
import Navber from './Pages/Shared/Navber/Navber';
import {ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppoinment from './Pages/Dashboard/MyAppoinment';
import MyReview from './Pages/Dashboard/MyReview';

function App() {
  return (
    <div>
     <Navber></Navber>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
  
       <Route path='/appointment' element={<RequireAuth><AppointmentDetails/></RequireAuth>}></Route>
    
      <Route path='/register' element={<Register/>} ></Route>
      <Route path='/dashboard' element={<RequireAuth><Dashboard/></RequireAuth>} >
        <Route index element={<MyAppoinment/>}></Route>
        <Route path='review' element={<MyReview/>}></Route>
      </Route>
      

     

     </Routes>
     <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
