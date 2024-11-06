import React from 'react'
import "../styles/footer.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Footer=()=> {
  return (
    <div className='footer'>
        <div className='section'>
            <div className='link'>
                <div className='link_div'>
                    <h4>Founders</h4>
                    
                    <p>Ankita Sonawane</p>
                    
                    
                    <p>Tanvi Swami</p>
                   
                    
                    <p>Aditi Somvanshi</p>
                   
                </div>
                <div className='link_div'>
                    <h4>Phone Numbers</h4>
                    
                    <p>1234561234</p>
                   
                    
                    <p>0240-123123</p>
                   
                   
                    <p>9900990099</p>
                    
                </div>
                <div className='link_div'>
                    <h4>For Any Query</h4>
                   
                    <a href="/contact">
                    <p>Cick Here</p>
                    </a>
                </div>
                <div className='link_div'>
                    <h4>Follow Us On</h4>
                    <div className='social'>
                    <a href="https://facebook.com"><FaFacebook style={{ color: 'black', fontSize: '24px', marginRight: '10px' }}/></a>
        <a href="https://twitter.com"><FaTwitter style={{ color: 'black', fontSize: '24px', marginRight: '10px' }}/></a>
        <a href="https://linkedin.com"><FaLinkedin style={{ color: 'black', fontSize: '24px', marginRight: '10px' }}/></a>

        <a href="https://instagram.com"><FaInstagram style={{ color: 'black', fontSize: '24px' }}/></a>
                    </div>
                   
                </div>
            </div>
            <hr></hr>
            <div className='below'>
                <div className='imp'>
                        <p>
                          ngoconnector@gmail.com
                        </p>
                        <div>
        <h2 className="end">Thank you for visiting our website!!</h2>
      </div>
                </div>
               
            </div>
           
        </div>
       
    </div>
  )
}

export default Footer;
