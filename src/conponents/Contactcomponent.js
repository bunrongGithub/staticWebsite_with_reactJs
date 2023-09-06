import React, { useState } from 'react';
import './Contactcomponent.css';
import Data from './Data';
import getFormValues from './getFormValues';
const Contactcomponent = () => {
   const [data,setData] = useState(Data);
   const [showText, setShowText] = useState(false);
   const OnSubmit = (e) =>{
      e.preventDefault();
      const {isEmpty,data} = getFormValues(e.currentTarget);
      if(isEmpty) {
         console.log('please provide all values');
         return;
      };
      console.log(data);
      e.currentTarget.reset();

   };
   return (
      <div className='contact'>
         <form className='form-contact'  data-aos="fade-up"
               data-aos-anchor-placement="center-bottom"
               onSubmit={OnSubmit}
         >
               <h2 className='head-title'>Form contact Us</h2>
               <input 
                  className='input' 
                  type='text' 
                  placeholder='username' 
                  autoFocus  
                  name='text'
               />
               <input 
                  className='input'
                  type='email' 
                  placeholder='example@gmail.com' 
                  name='email'
               />
               <input 
                  className='input' 
                  type='number' 
                  placeholder='+855' 
                  name='number'
               />
               <textarea 
                  textarea='textarea' 
                  className='input' 
                  rows="4" 
                  cols="50" 
                  placeholder='type Here...' 
                  name='textarea'
               />
            <button type='submit' className='submit' >Sumbit</button>
         </form>
         <div className='contact-title'  data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">
            {
               data.map((infomat,index)=>{
                  return(
                     <p key={index}>
                        {showText ? infomat.info :`${infomat?.info?.substring(0,250)}...`}
                        <button className='btnShowText' type='button' onClick={()=> setShowText(!showText)}>
                           {
                              showText ? 'Showless':'ReadMore'
                           }
                        </button>
                     </p>
                  )
               })
            }
         </div>
      </div>
   )
}

export default Contactcomponent