import React from "react";
import axios from "axios";
import addcontact3 from "../Images/addcontact3.webp";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AddContactsFun() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [details, setDetails] = useState("");

  const add = (e) => {
    e.preventDefault();
    console.log("hello");
    axios.post(`http://localhost:3006/contact`, {
      name,
      email,
      phonenumber,
      details,
    });
    // e.target.reset();
    setName("");
    console.log("done");
    navigate("/list");
  };

  return (
    <div className="container ">
      <h1 className=" mt-5" style={{marginLeft:"9cm" , marginBottom:"1cm"}} >Add Contact Details</h1>
      <div style={{display:"flex" , flexDirection:"row"}}>
      <form class=" mt-5 card p-3 col-4">
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            type="name"
            class="form-control"
            id="exampleInputName"
            name="name"
            // value={this.state.name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail"
            name="email"
            //value={this.state.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Phone Number</label>
          <input
            type="number"
            class="form-control"
            id="exampleInputPhonenumber"
            name="phonenumber"
            // value={this.state.phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Details</label>
          <input
            type="textarea"
            class="form-control"
            id="exampleInputText"
            name="details"
            // value={this.state.details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>

        <button type="submit" class="btn btn-primary" onClick={add}>
          Submit
        </button>
      </form>
      <img src={addcontact3} style={{height:"9cm" , width:"2cm" , marginTop:"2cm" , marginLeft:"2cm"}}  class="d-block w-100" alt="..." />
      </div>
    </div>
   
  );
}

export default AddContactsFun;

// https://63ea60013363c87003680be8.mockapi.io/COntact_Data-Fake
