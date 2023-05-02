import React from 'react'
import {BrowserRouter, Routes ,Route} from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';


const App = () => {
  return (
    <div>
     <BrowserRouter>
     < Navbar />
      <Routes>
      <Route exact path='/' element={< Home/>}></Route>
      <Route  path='/about' element={< About />}></Route>
      <Route  path='/services' element={< Services />}></Route>
      <Route  path='/contact' element={< Contact />}></Route>
            
      </Routes>
        
     </BrowserRouter>
      
    </div>
  )
}

export default App

