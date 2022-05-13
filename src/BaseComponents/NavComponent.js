import React from 'react';
import './NavComponent.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



const NavComponent=()=>{

	return(
		<div className="navclass">
			<nav>
			    <ul className="navpoints">
	                <li id="navoption"><Link to="/">Home</Link></li>
	                <li id="navoption"><Link to="/Examples">Examples</Link></li>
	                <li id="navoption"><Link to="/About">About</Link></li>
	                <li id="navoption"><Link to="/Contact">Contact</Link></li>
	            </ul>
            </nav>	
		</div>
	);
}

export default NavComponent;