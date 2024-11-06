import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';
import Logo from "../Components/Assets/log.jpg";

import Dropdown from '../pages/Dropdown';

// import sun from "../assets/sun.jpg";

//import moon from "../assets/moon.png";

  // const Navbar=({theme,setTheme})=>{
  //   // const toggle_mode=()=>{
  //   //   theme ==='light'? setTheme('dark') :setTheme('light');
  //   // }
  const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
  
    // Function to toggle the dropdown visibility
    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
  
    return (
      <div className="navbar">
        <div className="leftSide">
          <img src={Logo} alt="Logo" width="100" /> 
          <h1 className='head'>NGO Connector</h1>
        </div>
        <div className="rightSide">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/donate">Donate</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>
              <Dropdown showDropdown={showDropdown} toggleDropdown={toggleDropdown} />
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
export default Navbar;