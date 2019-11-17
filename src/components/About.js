import React from 'react';
import pic from "../profilepic.jpg";

export default function() {
  return (
      <div className="about-container">
      
        <div className="profile-pic">
          <img src={pic} ></img>
        
        
        <div>
           <h1>Hello friend!</h1>
          <p>Thank you for visiting my store. I sell african jewelry and accessories and hair extentions. I am from senegal and during college here I used to sell hair extentions to my cohorts and that is where this started.</p>
        </div>
         
        </div>
      </div>
  )
}
