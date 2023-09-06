import './FooterStyle.css';
import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';
const Footer = () => {
   return (
      <div className='footer'>
         <div className='footer-container'>
            <div className='left'data-aos="fade-right">
               <div className='location'>
                  <FaHome 
                     size={20} 
                     style={{color:'#fff',marginRight:'2rem'}}
                  />
                  <div>
                     <p>123 Housing Society</p>
                     <p>PHNOM PENH</p>
                  </div>
               </div>
               <div className='phone'>
                  <h4>
                     <FaPhone 
                        size={20} 
                        style={{color:'#fff',marginRight:'2rem'}}
                     />
                     1-2323-343-23
                  </h4>
               </div>
               <div className='email'>
                  <h4>
                     <FaMailBulk 
                        size={20} 
                        style={{color:'#fff',marginRight:'2rem'}}
                     />
                     bunbunrong993@gmail.com
                  </h4>
               </div>
            </div>
            <div className='right'data-aos="fade-left">
               <h4>
                  <span style={{textDecoration:'underline'}}>About</span> the company
               </h4>
               <p>
                  Lorem Ipsum is simply dummy text of the 
                  printing and typesetting industry. Lorem 
                  Ipsum has been the industry's standard dummy 
               </p>
               <div className='socail'>
                  <FaFacebook 
                        size={30} 
                        style={{color:'#fff',marginRight:'1rem'}}
                  />
                  <FaTwitter 
                        size={30} 
                        style={{color:'#fff',marginRight:'1rem'}}
                  />
                  <FaLinkedin 
                        size={30} 
                        style={{color:'#fff',marginRight:'1rem'}}
                  />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Footer