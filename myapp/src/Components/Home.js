import React from "react";
import homepage from "../Images/homepage.jpg";
import { Link } from "react-router-dom";

const Home = () => {
    return ( 
      // <div>
      // <div>
      //   <img src={homepage} class="w-100"></img>
      // </div></div>
      
      <div class="carousel-item active">
        <img src={homepage} class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5 style={{color:"black" , fontSize:30, letterSpacing:2,wordSpacing:4}}>CONTACT DETAILS</h5>
          <div>
          <Link to="/list" style={{color:"black" , paddingRight:"10px"}}>Contact List</Link>
          <Link to="/add" style={{color:"black", paddingLeft: '10px'}}>Add Contact Page</Link>
          </div>
        </div>
      </div>
      
    );
  };
  
  export default Home;
