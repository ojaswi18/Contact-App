import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AddContactsFun from "./Components/AddContactsFun";
import UpdateContactDetails from "./Components/UpdateContactDetails";
import ContactList from "./Components/ContactList";
import ContactDetails from "./Components/ContactDetails";
import api from "./api/contact";
import { v4 as uuid } from 'uuid';
import { useState, useEffect } from "react";
import axios from "axios";



export default function App() {

  
  return (
    <div>
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/add" element={<AddContactsFun />} /> 
      {/* addContactHandler={addContactHandler} */}
      <Route path="/list" element={<ContactList />} />
      <Route path="/details/:id" element={<ContactDetails />} />
      <Route path="/update" element= {<UpdateContactDetails/>} />
  </Routes>
</BrowserRouter>
</div>
);
}

// export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
