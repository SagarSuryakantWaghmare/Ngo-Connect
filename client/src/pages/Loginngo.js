// import React from 'react';

// const Login = () => {
//   return (
//     <div>
//       <h1>email: <input type="email" name="" id="" /></h1>
//     </div>
//   )
// }

// export default Login;
import React from 'react';
import "../styles/login.css";
import Log from "../Components/Assets/vol.avif";
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// import { FaUsers,FaLock} from "react-icons/fa";

import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

  const Loginngo = () => {
    // const navigate = useNavigate();
  
    // const handleRegisterClick = () => {
    //   // Perform registration logic here if needed
  
    //   // Navigate to the dashboard page
    //   navigate('/Rej.js');
    // };
  return (
    <div className='wrappers'>
      
    <div className='form-box login' style={{backgroundImage:`url(${Log})`}}> 
    <form action="">
        <h1>Ngo Login</h1>
        <div className='input-box'>
      
      <input type='text' placeholder='Username' required></input>
      
      <FaUser className='icon' />
      
      
      </div>
      
      <div className='input-box'>
      <input type='password' placeholder='Password' required></input>
      <FaLock className='icon'/>  
      </div> 
      <div className="remember-forgot">
        <label><input type='checkbox'/>Remember me</label>
        <div className='rem'>
        <p>
        <Link to="/forgot">Forgot password</Link>
      </p></div>
      </div>
      <div>
      <Link to="/ngofirst">
      <button type='submit'>Login</button>
      </Link>
      </div>
      
      <div className='register-link'>
       
        <p>
        Don't have an account? <Link to="/register">Click here</Link>
      </p>
      </div>
      </form>
      </div>
     
      
   </div>
   
  )
};

export default Loginngo;