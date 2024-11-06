import React from 'react'
import '../styles/home.css';
import main from "../Components/Assets/edu.jpg";
import ImageSlider from '../pages/ImageSlider';
import Card1 from '../pages/Card1';
 import Card2 from '../pages/Card2';
import Card3 from '../pages/Card3';
import Card4 from '../pages/Card4';
function home() {
  return (

    <div className="home" >
     
       <div className='text'>
      <h1>
        Join us to bring the change in those people's life who does'nt get the chance to fulfill their own wishes.
        </h1>
        
      </div>
     
      <div className="headerContainer"  >
      <ImageSlider />
     
      <p className='blink'>"Together, we create pathways to a
           brighter, more inclusive future"
           </p>  
      </div>
      <div class="cards" >
      <Card1   />
      <Card2 />
      <Card3 />
      <Card4 />
    </div>
      <div className='all'>
      <img src={main} alt="Logo" width="1000" height="620" /> 
      </div><div className='text2'><h1>
      "The best way to find yourself is to lose yourself in the service of others." 
      </h1></div>
      <br></br>
 <br></br>     
      
     
     
    </div>

  )
}

export default home;
