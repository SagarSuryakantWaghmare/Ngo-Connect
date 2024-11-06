import React from 'react';
import '../styles/contact.css';
const ContactUs = () => {
  return (
    <div className="show">
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <p>Have questions or need help? Fill out the form below or reach out to us directly, and we’ll be in touch soon!</p>
      
      <form className="contact-form">
        <label>Name</label>
        <input type="text" name="name" placeholder="Your Name" required />
        
        <label>Email</label>
        <input type="email" name="email" placeholder="Your Email" required />
        
        <label>Subject</label>
        <select name="subject">
          <option value="donation">Donation Inquiry</option>
          <option value="partnership">Partnership</option>
          <option value="volunteer">Volunteer Opportunities</option>
          <option value="general">General Question</option>
        </select>
        
        <label>Message</label>
        <textarea name="message" placeholder="Your Message" required></textarea>
        
        <button type="submit">Submit</button>
      </form>
      
      <div className="contact-info">
        <p>Email: ngoconnector@gmail.com</p>
        <p>Phone: 1234567890</p>
             </div>
   
    </div>
    </div>
  );
};

export default ContactUs;