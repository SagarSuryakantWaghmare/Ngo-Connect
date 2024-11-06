import React from 'react'
 import fourth from "../Components/Assets/fourth.jpg";
import '../styles/card4.css';
//  import "../node_modules/bootstarp/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

function card1() {
  return (
    <div>
     
        <div className='seven'>
        <h2>Food NGO</h2>
        <img src={fourth} className='ngo4' alt=""/>
       
        <p>NGOs like Akshaya Patra, Food Bank of India and Feeding India tackle hunger and malnutrition. They distribute food to underprivileged communities, support sustainable agriculture and promote nutrition education. These efforts reduce food waste and ensure nutritious meals.
        </p>
        
        </div>
        <div className='eight'>
        
        <h1>NGO'S joined are:</h1><br></br>
        <h2>
          {" "}Rise Against Hunger India
         <br /><br />
         Action Against Hunger  <br /><br />
         India FoodBanking Network  <br /><br />
         Food bank India  <br /><br />
         Akshaya Patra Foundation  <br /><br />
         Feeding India  <br /> <br /></h2>
        
        </div>

           

        </div>
   
  
  )
}

export default card1
