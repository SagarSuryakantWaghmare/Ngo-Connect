import React from 'react';
import '../styles/about.css';
function About() {
  return (
    <div className="back">
    <div className="about-us-container">
      <div className="mission">
        <h2>Our Mission: Connecting Compassion to Causes</h2>
        <p>
          At <strong>NGO Connector</strong>, we believe in the power of unity and compassion. 
          At <strong>NGO Connector</strong>, we believe in the power of unity and compassion. 
          Our mission is simple yet powerful: to bring together NGOs from around the world on one platform, 
          making it easier for individuals like you to connect, engage, and donate to the causes that matter most.
          
        </p>
     
      </div>

      <div className="why">
        <h2>Why We Exist</h2>
        <p>
          The world is filled with amazing organizations doing life-changing work, but finding and supporting the right cause can be overwhelming. 
          We created <strong>NGO Connector</strong> to solve this problem by making the donation process transparent, simple, and accessible for everyone.
        </p>
      </div>

      <div className="difference">
        <h2>How We Make a Difference</h2>
        <p>
          We partner with trusted NGOs that align with your values and goals. By verifying every organization on our platform, 
          we ensure that your donations are going directly to those who need it most. We also provide real-time updates on how 
          your contributions are making an impact, so you can see the difference you're helping to create.
        </p>
      </div>

      <div className="values">
        <h2>Our Core Values</h2>
        <ul>
          <li><strong>Transparency:</strong> Every donation is trackable, and every NGO is vetted for credibility.</li>
          <li><strong>Empowerment:</strong> We believe in empowering donors to make informed choices and NGOs to focus on their missions.</li>
          <li><strong>Unity:</strong> We aim to bridge the gap between individuals and the causes they care about, bringing them together for a common purpose.</li>
          <li><strong>Accountability:</strong> We hold ourselves and our partner organizations to the highest standards, ensuring your trust is earned and maintained.</li>
        </ul>
      </div>

     
    </div>
    
    </div>
  );
}

export default About; // Make sure to export About