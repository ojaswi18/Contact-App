import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ContactList = () => {
  const [apidata, setApidata] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3006/contact`).then((response) => {
      setApidata(response.data);
    });
  }, []);
  // console.log(apidata[4].name);

  const setData = (data) => {
    let { id, name, email, phonenumber, details } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Email", email);
    localStorage.setItem("PhoneNumber", phonenumber);
    localStorage.setItem("Details", details);
  };

  const onDelete = (id) => {
    axios.delete(`http://localhost:3006/contact/${id}`).then(() => {
      getData();
    });
  };

  const getData = () => {
    axios.get(`http://localhost:3006/contact`).then((getData) => {
      setApidata(getData.data);
    });
  };

  const renderContactList = apidata.map((data) => (
    <li class="card p-4 mb-2 ">
      <div>
        <Link to="/details/${id}" state={{ data: data }} class="text-dark">
          <div className="header">{data.name}</div>
        </Link>

        {data.email}
        <div class="text-right">
          <Link to="/update">
            <button type="button" class="mr-1" onClick={() => setData(data)}>
              Update
            </button>
          </Link>
          <button class="mr-1 " type="button" onClick={() => onDelete(data.id)}>
            Delete
          </button>
        </div>
      </div>
    </li>
  ));

  return (
    <div class="container">
      <h1 class="p-4 mb-3" style={{marginLeft:"0.5cm"}}>ContactList</h1>
      <ul class> {renderContactList}</ul>
    </div>
  );
};

export default ContactList;
