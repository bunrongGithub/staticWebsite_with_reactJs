import './HeroImgStyle.css';
import React from 'react'
import background from '../asset/project-1.jpg'
import { Link } from 'react-router-dom';
const HeroImg = () => {
   return (
      <div className='hero'>
         <div className='mask'>
            <img 
               className='into-img' 
               src={background} alt='background'
            /> 
         </div>
         <div className='content'data-aos="zoom-in">
            <p>HI, I'M A FREELANCER.</p>
            <h1>React Developer.</h1>
            <div>
               <Link to='/project' className='btns'>
                  Project
               </Link>
               <Link to='/contact' className=' btns btn-light'>
                  Contact
               </Link>

            </div>
         </div>
      </div>
   )
}

export default HeroImg