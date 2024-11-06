import React from 'react'
 import third from "../Components/Assets/third.jpg";
import '../styles/card3.css';
//  import "../node_modules/bootstarp/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

function card1() {
  return (
    <div>
     
        <div className='five'>
        <h2>Animal NGO</h2>
        <img src={third} className='ngo3' alt=""/>
       
        <p>Animal Welfare Board of India, PETA India and Wildlife SOS protect and care for animals. They rescue animals in distress, promote adoption and support animal health services. These NGOs advocate for animal rights, preventing cruelty and neglect.</p>
        
        </div>
        <div className='six'>
        
        <h1>NGO'S joined are:</h1><br></br>
        <h2>Blue Cross of India 
        <br /> <br />
         Animal Aid Unlimited <br /> <br />
         Animal Matter to Me <br /> <br />
         Charlie's Animal Rescue Center <br /> <br />
         People for Animals <br /> <br />
         Animal Rescue and Care<br /> <br /></h2>
        
        </div>

           

        </div>
   
  
  )
}

export default card1
