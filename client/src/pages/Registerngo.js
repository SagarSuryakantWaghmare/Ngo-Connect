import React ,{useState} from 'react';
import "../styles/reg.css";
import "../styles/regngo.css";
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { MdLocationOn } from 'react-icons/md';
import { FaLock ,FaEnvelope,FaMapPin,FaAngleDown ,FaFileUpload } from "react-icons/fa";
import Log from "../Components/Assets/vol.avif";



 

 const Registerngo = () =>{
  const [selectedNgoType, setSelectedNgoType] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleNgoTypeChange = (e) => {
    setSelectedNgoType(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the first file uploaded
    if (file) {
      setUploadedFile(file); // Set the uploaded file
      setFileName(file.name); // Set the uploaded file name
    } else {
      setFileName(''); // Clear the file name if no file is selected
    }
  };

    // Form submission logic here
    console.log('Form Submitted:', {
      selectedNgoType,
      uploadedFile
    });

   return (
     <div>
       <div className="form-box">
        
        <div className='wrapper' style={{backgroundImage:`url(${Log})`}}> 
          <form action="">
        <h1>NGO Registration</h1>
       
          <div className='input-box'>
        
        <input type='text' placeholder='Ngo name' required></input>
        
        <FaUser className='icon' />
        
        
        </div>
        <div className='input-box'>
        
        <input type='text' placeholder='Location' required></input>
        
        <MdLocationOn  className='icon' />
        
        
        </div>
        <div className='input-box'>
        {/* <label htmlFor="ngoType">
          <FaTags className='icon'/> NGO Type:
        </label> */}
        <select
          id="ngoType"
          value={selectedNgoType}
          onChange={handleNgoTypeChange}
          required
        >
          <option value="" disabled>Select NGO Type</option>
          <option value="Education">Education</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Environment">Environment</option>
          <option value="Animal Welfare">Animal Welfare</option>
          <option value="Women Empowerment">Women Empowerment</option>
          <option value="Child Welfare">Child Welfare</option>
          <option value="Disaster Relief">Disaster Relief</option>
          <option value="Poverty Alleviation">Poverty Alleviation</option>
          <option value="Others">Others</option>
        </select>
        <FaAngleDown className="icon" />
      </div>
      
      <div className="file-upload-container">
        <label htmlFor="fileUpload">
        Upload Document:  <FaFileUpload className='icon'/> 
        </label>
        <input
          type="file"
          id="fileUpload"
          onChange={handleFileChange}
          required
        />
      {fileName && <span className="file-name">{fileName}</span>}
      </div>
      
        <div className='input-box'>
        
        <input type='text' placeholder='Pin' required></input>
        
        <FaMapPin  className='icon' />
        
        
        </div>
        <div className='input-box'>
        
        <input type='email' placeholder='Email' required></input>
        
        <FaEnvelope className='icon' />
        
        
        </div>
        <div className='input-box'>
        <input type='password' placeholder='Password' required></input>
        <FaLock className='icon'/>  
        </div> 
        <div className="remember-forgot">
          <label><input type='checkbox'/>I agree to the terms and condition</label>
        
        </div>
        <div>
      <Link to="/option1">
      <button type='submit'>Register</button>
      </Link>
      </div>
       
        <div className='register-link'>
          {/* <p>
            Already have an account?<a href="#">Login</a>
          </p> */}
       
        </div>
        </form>
        </div>
       
        </div>
     </div>
   );
 };
 
 export default Registerngo;
 
 