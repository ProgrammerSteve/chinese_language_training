import './App.css';
import Home from './Home.js'
import NavComponent from './BaseComponents/NavComponent.js';
import FooterComponent from './BaseComponents/FooterComponent.js';
import React, {Component} from 'react';
//https://mandarin-hsk1-training.herokuapp.com/

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div class="masterdiv">
        <div class="middlediv">

          <div>
             <NavComponent/>
          </div>

          <div>
          <Routes>
            <Route path="/Examples" element={<p>Example Component</p>}/>
            <Route path="/About" element={<p>about</p>}/>
            <Route path="/Contact" element={<p>contact</p>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
          </div>
          
          <div>
             <FooterComponent/>
          </div>

        </div>
      </div>
    </Router>


  );
}

export default App;
