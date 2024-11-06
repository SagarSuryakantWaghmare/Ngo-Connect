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
import "./login.scss";
import { FaUser,FaLock} from "react-icons/fa";


const login = () => {
  return (
    <div className='wrapper'> 
      
        <h1> Login</h1>
        <div className='input-box'>
      
      <input type='text' placeholder='Username' required></input>
      <FaUser className='icon'/>
      
      
      
      </div>
      <div className='input-box'>
      <input type='password' placeholder='Password' required></input>
      <FaLock className='icon'/>  
      </div> 
      <div className="remember-forgot">
        <label><input type='checkbox'/>Remember me</label>
        <a href="#"> Forgot Password?</a>
      </div>
      <button type='submit'>Login</button>
      <div className="register-link">
        <p> Don't have an account? <a href="#"> Register</a></p>
      </div>
    </div>
    
  )
};

export default login;

