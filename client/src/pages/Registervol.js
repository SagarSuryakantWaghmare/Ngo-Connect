import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import { FaUser, FaLock, FaEnvelope, FaPhone } from "react-icons/fa";
import { MdLocationOn, MdCalendarToday, MdWc } from 'react-icons/md';
import "../styles/reg.css";
import Log from "../Components/Assets/vol.avif";

const Registervol = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: '',
    address: '',
    phone: '',
    email: '',
    password: '',
  });
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!isChecked) {
      return handleError('Please agree to the terms and conditions.');
    }

    const { name, dob, gender, address, phone, email, password } = formData;

    // Validate all fields are filled
    if (!name || !dob || !gender || !address || !phone || !email || !password) {
      return handleError('All fields are required.');
    }

    // Validate phone number format (optional)
    if (!/^\d{10}$/.test(phone)) {
      return handleError('Phone number must be 10 digits.');
    }

    // Validate DOB format (optional)
    const dobRegex = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD format
    if (!dobRegex.test(dob)) {
      return handleError('DOB must be in YYYY-MM-DD format.');
    }

    try {
      const url = "http://localhost:8080/volunteers/register";
      const response = await fetch(url, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        const errorMessage = errorResponse.error?.details[0]?.message || errorResponse.message || 'Registration failed';
        return handleError(errorMessage);
      }

      const result = await response.json();
      const { success, message } = result;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate('/home');
        }, 1000);
      } else {
        handleError(message || 'Registration failed');
      }
    } catch (err) {
      handleError(err.message || 'Registration failed');
    }
  };

  return (
    <div>
      <div className="form-box">
        <div className='wrapper' style={{ backgroundImage: `url(${Log})` }}>
          <form onSubmit={handleRegister}>
            <h1>Volunteer Registration</h1>

            <div className='input-box'>
              <input
                type='text'
                placeholder='Fullname'
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <FaUser className='icon' />
            </div>

            <div className='input-box'>
              <input
                type='date' // Changed to 'date' for better UX and validation
                name="dob"
                required
                value={formData.dob}
                onChange={handleChange}
              />
              <MdCalendarToday className='icon' />
            </div>

            <div className='input-box'>
              <input
                type='text'
                placeholder='Gender'
                name="gender"
                required
                value={formData.gender}
                onChange={handleChange}
              />
              <MdWc className='icon' />
            </div>

            <div className='input-box'>
              <input
                type='text'
                placeholder='Address'
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
              />
              <MdLocationOn className='icon' />
            </div>

            <div className='input-box'>
              <input
                type='text'
                placeholder='Phone number'
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
              />
              <FaPhone className='icon' />
            </div>

            <div className='input-box'>
              <input
                type='email'
                placeholder='Email'
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <FaEnvelope className='icon' />
            </div>

            <div className='input-box'>
              <input
                type='password'
                placeholder='Password'
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
              />
              <FaLock className='icon' />
            </div>

            <div className="remember-forgot">
              <label>
                <input
                  type='checkbox'
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                I agree to the terms and conditions
              </label>
            </div>

            <button type='submit'>Register</button>
            <span> Already have an account? <Link to="/login">Login</Link></span>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Registervol;
