import React from 'react'
import Sidenav from './components/Sidenav';
import Home from "./components/Home";
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import {Routes,Route,BrowserRouter} from 'react-router-dom';

const Material = () => {
  return (
     <BrowserRouter>
         <Sidenav />
     <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/about' exact element={<About/>}></Route>
        <Route path='/services' exact element={<Services/>}></Route>
        <Route path='/contact' exact element={<Contact/>}></Route>
     </Routes>  
     </BrowserRouter>

  )
}

export default Material
