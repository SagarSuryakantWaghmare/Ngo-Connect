import React from 'react'
// import first from "../assets/old.jpg";
import first from "../Components/Assets/old.jpg";
import '../styles/card1.css';
//  import "../node_modules/bootstarp/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

function card1() {
  return (
    <div>
     
        <div className='one'>
        <h2>Senior Citizen NGO</h2>
        <img src={first} className='ngo1' alt=""/>
        
        <p>NGOs like HelpAge India, Dignity Foundation and Nightingales Medical Trust focus on improving elderly lives. They provide emotional support, healthcare services and social engagement opportunities. These organizations advocate for elderly rights and welfare, ensuring dignity and comfort in their golden years.
        </p>
        </div>
        <div className='two'>
        
        <h1>NGO'S joined are:</h1><br></br>
        <h2>HelpAge India 
        <br /> <br />
         Dignity Foundation <br /> <br />
         Agewell Foundation <br /> <br />
         Dada Dadi Foundation <br /> <br />
         Maya CARE <br /> <br />
         Adhata Trust<br /> <br /></h2>
        
        </div>

           

        </div>
   
  
  )
}

export default card1
