import React from "react";
import { useLocation } from 'react-router-dom';
import {useNavigate} from "react-router-dom";


const ContactDetails = (props) => {
    
    const navigate=useNavigate();
    const location = useLocation();
    const info = location.state;
    console.log(info.data);

    const routechange1=()=>{
        navigate("/list");
    }
    const routechange2=()=>{
        navigate("/update");
    }
  
     return(
        <div class="container" style={{marginTop:"1cm"}}>
            <div class="jumbotron">
            <h1 class="mb-4" style={{paddingBottom:"0.5cm"}}>Contact Details</h1>
            <div>Name : {info.data.name}</div>
            <div>Email : {info.data.email}</div>
            <div>Phone Number : {info.data.phonenumber}</div>
            <div>Details : {info.data.details}</div>
            <button onClick={routechange2} style={{marginTop:"1cm", marginRight:"0.3cm"}}>Update</button>
            <button onClick={routechange1} style={{marginTop:"1cm"}}>Contact List</button>

        </div>
        
        </div>
        
    );
}

export default ContactDetails;