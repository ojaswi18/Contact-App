import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UpdateContactDetails() {
  // const ref = React.useRef();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [details, setDetails] = useState("");
  const [id, setID] = useState(null);

  useEffect(() => {
    console.log("in useEffecr of update");

    let a = localStorage.getItem("ID");
    console.log(a);
    setID(a);
    console.log(id);
  }, []);

  const updateAPIData = (e) => {
    console.log("in update apidata");
    axios.put(`http://localhost:3006/contact/${id}`, {
      name,
      email,
      phonenumber,
      details,
    });
    console.log("update apidata done");
    alert("Information Updated");
    navigate("/list");
  };

  return (
    <div className="container">
      <h1 className=" mt-5" style={{ marginLeft: "7cm" }}>
        Update Contact Details
      </h1>
      <form class=" mt-5 card p-3 col-4" style={{ marginLeft: "7.2cm" }}>
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
        <div>
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck1"
            style={{marginLeft:"0.2cm"}}
          />
          <label class="form-check-label" for="defaultCheck1" style={{marginLeft:"0.6cm" }} >
            Update Info
          </label>
        </div>

        <button type="submit" class="btn btn-primary" style={{marginTop:"0.8cm"}} onClick={updateAPIData}>
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateContactDetails;
