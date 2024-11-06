import React from 'react'
 import second from "../Components/Assets/second.jpg";
import '../styles/card2.css';
//  import "../node_modules/bootstarp/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

function card2() {
  return (
    <div>
     
        <div className='three'>
        <h2>Child NGO</h2>
        <img src={second} className='ngo2' alt=""/>
        
        <p>Organizations such as Save the Children, UNICEF and Childline India prioritize child welfare. They provide education, healthcare and protection from abuse and exploitation. These NGOs promote child rights, development and well-being, shaping future generations.
        </p>
        
        </div>
        <div className='four'>
        
        <h1>NGO'S joined are:</h1><br></br>
        <h2>CRY(Child Rights and You) 
        <br /> <br />
        Udayan Care <br /> <br />
        SOS Children's Villages India <br /> <br />
        Kailash Satyarthi Foundation <br /> <br />
        Child Help Foundation <br /> <br />
        Akshaya Patra Foundation<br /> <br /></h2>
        </div>

           

        </div>
   
  
  )
}

export default card2
