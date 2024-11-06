import React from 'react';
import '../styles/donate.css';
const Donate = () => {
  return (
    <div className="show">

    <div className="contact-us-container">
        <h2>Why To donate??</h2>
    <h4>"Every little bit helps, and your kindness can make a world of difference. By donating, you support those in need and contribute to causes that bring hope and change. Your generosity can help provide essential resources and uplift communities, creating a brighter future for many. Together, we can make a lasting impact—thank you for considering a donation."

</h4>
      <h2>Want to Donate??</h2>
      <p>"Become a part of something greater! Fill out the form to donate and help us make a difference." </p>
      
      <form className="contact-form">
        <label>Name</label>
        <input type="text" name="name" placeholder="Your Name" required />
        
        <label>Email</label>
        <input type="email" name="email" placeholder="Your Email" required />
        
        <label>Enter Amount</label>
        <textarea name="message" placeholder="Your Message" required></textarea>
        
        <label>Message</label>
        <textarea name="message" placeholder="Your Message" required></textarea>
        
        <button type="submit">Submit</button>
      </form>
      
      
      
    </div></div>
  );
};

export default Donate;