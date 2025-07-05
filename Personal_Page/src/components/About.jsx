import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../App.css';

const About = () => {
 return (
   <div className="page-container">
     <h1>About</h1>
    <p>
  <strong>At Senda, every dish tells a story.</strong><br />
  We blend contemporary techniques with seasonal local ingredients to craft a unique culinary experience, personally designed by our chef.<br />
  More than just a restaurant, we are a space where creativity, sensitivity, and flavor come together to take you on an unforgettable gastronomic journey.<br />
  Here, signature cuisine comes to life in every detail.
    </p>
    </div>
 )
};

export default About;