
import React from 'react';
import contentImage4 from "../Asserts/Images/images/content-4.jpg";
import '../Asserts/Styles/Banner.css';


function Banner() {
  return (
    <div>
        <div className='position-relative pt-4'>
            <img src={contentImage4} alt='ambasidor' style={{maxWidth:'90%', height:'auto'}}/>
        
       
        <div className='banner-box position-absolute top-50 start-50 translate-middle text-center'>
            <h2>THE PRIME <br/> AMBASSADOR</h2>
            <p className='pt-3 fw-4' style={{color: "aqua"}}><a> <b>EXPLORE COLLECTIONS</b></a></p>
        </div>
        </div>
    </div>
  )
}

export default Banner;