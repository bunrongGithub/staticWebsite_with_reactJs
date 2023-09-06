import React, { useEffect, useState } from "react";
import './index.css';
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";
import { FadeLoader } from "react-spinners";
function App() {
   const [loading,setLoading] = useState(false);
   useEffect(()=>{
      setLoading(true);
      setTimeout(()=>{
         setLoading(false);
      },2000)
   },[]);
   return (
      <div className="App">
      {
         loading ? (
            <FadeLoader className="icons" color="#36d7b7" size={150}/>
         ) 
   :(
         <div>
            <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/about" element={<About/>}/>
               <Route path="/project" element={<Project/>}/>
               <Route path="/contact" element={<Contact/>}/>
            </Routes>
         </div>
      )
      }
      </div>
   );
}

export default App;
