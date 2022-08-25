import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Myprojects from "./pages/myprojects";
import Experiences from "./pages/experience";
import Home from "./pages/home";
import Navbar from './compo/navbar';
import Hobbies from './pages/hobbies';
import Music from './pages/musictastes';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Dropd from './compo/dropdown.jsx'
import "./App.css"
function App() {
  return (
    
   
  <BrowserRouter>
   
     
        
        <Navbar/>
        <Dropd />

     
        

        
     <div>
      <Routes>
        <Route exact path="/" element ={<Home/>} />
        <Route exact path="/myprojects" element ={<Myprojects/>} />
        <Route exact path="/Experiences" element ={<Experiences/>} />
        <Route exact path="/hobbies" element ={<Hobbies/>} />
        <Route exact path="/musictastes" element ={<Music/>} />
      </Routes>
      </div>
      
    
</BrowserRouter>


  );
}

export default App;