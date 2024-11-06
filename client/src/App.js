import React, { useState } from 'react';
import './App.css';
// import Navbar from './Components/Navbar';
// import Home from './pages/Home';
// import About from './pages/About'; 
// import Donate from './pages/Donate';
// import Loginngo from './pages/Loginngo';
// import Contact from './pages/Contact'; 
// import Registerngo from './pages/Registerngo';
// import Registervol from './pages/Registervol';
// import Loginvol from './pages/Loginvol';
// import Loginadmin from './pages/Loginadmin';
// // import Forgot from './pages/Forgot';
// import Ngofront from './pages/Ngofront';
// import Adminfront from './pages/Adminfront';
// import Volunteerfront from './pages/Volunteerfront';
// import Body from './pages/Body.js';
// import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup.jsx';

function App() {
  // const [theme, setTheme] = useState('light');

  return (
    // <div className={`container ${theme}`}>
    //   <Navbar theme={theme} setTheme={setTheme} />
    //   <Routes>
    //     <Route path="/" element={<Home />} /> 
    //     <Route path="/about" element={<About />} />
    //     <Route path="/option1" element={<Loginngo />} />
    //     <Route path="/option2" element={<Loginvol />} />
    //     <Route path="/option3" element={<Loginadmin />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route path="/donate" element={<Donate />} />
    //     <Route path="/register" element={<Registerngo />} />
    //     <Route path="/registervol" element={<Registervol />} />
    //     {/* <Route path="/forgot" element={<Forgot />} /> */}
    //     <Route path="/ngofirst" element={<Ngofront />} />
    //     <Route path="/volfirst" element={<Volunteerfront />} />
    //     <Route path="/adminfirst" element={<Adminfront />} />
    //   </Routes>
    //   <Body />
    // </div>
    <>
    <Signup/>
    </>
  );
}

export default App;
