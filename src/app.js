import React from "react";
import {useEffect,useState} from 'react';
import Example from "../component/navbar";
import Landing from "../component/landing";
import Mainpage from "../component/main";
import Section from "../component/section"
import Footer from "../component/footer";
import Services from "../component/service";

const App = () =>{
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
      const handleScroll = event => {
        setScrollTop(window.scrollY);
        if (window.scrollY < 100) {
            window.document.getElementById("header").style.backgroundColor= ''
           } else {
           window.document.getElementById("header").style.backgroundColor= 'white'
           
           }
      };
  
      window.addEventListener('scroll', handleScroll);
     
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
 
      
    }, []);
    return (
        <>
      
        <Example></Example>
        <Landing></Landing>
      <Mainpage></Mainpage>
      <Section></Section>
      <Services></Services>
      <Footer></Footer>
       </>
 
    )
}

export default App