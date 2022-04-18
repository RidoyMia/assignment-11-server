import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Aboutme from './components/Aboutme/Aboutme';
import BLog from './components/Blog/BLog/BLog';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Notpound from './components/Notpound/Notpound';
import Required from './components/Required/Required';
import Shipment from './components/Shipment/Shipment';
import Signup from './components/Signup/Signup';

const App = () => {
  return (
    <div>
       <Header></Header>
       
       <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/login' element={<Login></Login>}></Route>
         <Route path='/signup' element={<Signup></Signup>}></Route>
         <Route path='/BLog' element={<BLog></BLog>}></Route>
         <Route path='/aboutme' element={<Aboutme></Aboutme>}></Route>
         <Route path='/:shipment' element={
           <Required>
              <Shipment></Shipment>
           </Required>
         }></Route>
         <Route path='*' element={<Notpound></Notpound>}></Route>
       </Routes>

       <Footer></Footer>
    </div>
  );
};

export default App;