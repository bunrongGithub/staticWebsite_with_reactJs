import './workcard.css';
import pro from '../asset/project-4.jpg';
import pro2 from '../asset/website-template-preview-2228447.webp';
import pro3 from '../asset/website-template-preview-155556.webp';
import pro4 from '../asset/website-template-preview-3275982.webp'
import React from 'react';
import { NavLink } from 'react-router-dom';

const WorkCard = () => {
   return (
      <div className='work-container'>
         <h1 className='project-heading'>PROJECT</h1>
         <div className='project-container'>
            <div className='project-card' data-aos="fade-up"
               data-aos-duration="1000">
               <img src={pro} alt='image'/>
               <h2 className='project-title'>Project title</h2>
               <div className='pro-details'>
                  <p>Lorem Ipsum is simply dummy text of 
                     the printing and typesetting industry. 
                     Lorem Ipsum has been the industry's 
                     standard dummy text ever since the
                  </p>
                  <div className='pro-btns'>
                     <NavLink 
                        to='url.com' 
                        className='btn'
                     >
                        View
                     </NavLink>
                     <NavLink 
                        to='url.com' 
                        className='btn'
                     >
                        Source
                     </NavLink>
                  </div>
               </div>
            </div>
            <div className='project-card'  data-aos="fade-up"
               data-aos-duration="1000">
               <img src={pro2} alt='image'/>
               <h2 className='project-title'>Project title</h2>
               <div className='pro-details'>
               <p>Lorem Ipsum is simply dummy text of 
                     the printing and typesetting industry. 
                     Lorem Ipsum has been the industry's 
                     standard dummy text ever since the
                  </p>
                  <div className='pro-btns'>
                     <NavLink 
                        to='url.com' 
                        className='btn'
                     >
                        View
                     </NavLink>
                     <NavLink 
                        to='url.com' 
                        className='btn'
                     >
                        Source
                     </NavLink>
                  </div>
               </div>
            </div>
            <div className='project-card'  data-aos="fade-up"
               data-aos-duration="1000">
               <img src={pro3} alt='image'/>
               <h2 className='project-title'>Project title</h2>
               <div className='pro-details'>
               <p>Lorem Ipsum is simply dummy text of 
                     the printing and typesetting industry. 
                     Lorem Ipsum has been the industry's 
                     standard dummy text ever since the
               </p>
                  <div className='pro-btns'>
                     <NavLink 
                        to='url.com' 
                        className='btn'
                     >
                        View
                     </NavLink>
                     <NavLink 
                        to='url.com' 
                        className='btn'
                     >
                        Source
                     </NavLink>
                  </div>
               </div>
            </div>
            <div className='project-card'  data-aos="fade-up"
               data-aos-duration="1000">
               <img src={pro4} alt='image'/>
               <h2 className='project-title'>Project title</h2>
               <div className='pro-details'>
               <p>Lorem Ipsum is simply dummy text of 
                     the printing and typesetting industry. 
                     Lorem Ipsum has been the industry's 
                     standard dummy text ever since the
               </p>
                  <div className='pro-btns'>
                     <NavLink 
                        to='url.com' 
                        className='btn'
                     >
                        View
                     </NavLink>
                     <NavLink 
                        to='url.com' 
                        className='btn'
                     >
                        Source
                     </NavLink>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default WorkCard