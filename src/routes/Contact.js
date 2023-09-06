import React from 'react'
import Navbar from '../conponents/Navbar';
import Footer from '../conponents/Footer';
import HeroImg2 from '../conponents/HeroImg2';
import Contactcomponent from '../conponents/Contactcomponent';
const Contact = () => {
   return (
      <div>
         <Navbar/>
         <HeroImg2 heading="CONTACT US" text="Lets have a chat"/>
         <Contactcomponent/>
         <Footer/>
      </div>
   )
}

export default Contact