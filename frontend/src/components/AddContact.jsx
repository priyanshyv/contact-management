import React, { useState } from 'react';
import axios from '../services/api';
import { useNavigate } from 'react-router-dom';
const AddContact = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [company, setCompany] = useState('');
  const [jobtitle, setJobtitle] = useState('');
  const navigate = useNavigate(); 
  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      firstname,
      lastname,
      email,
      phoneno,
      company,
      jobtitle,
    };
    axios.post('/contacts', newContact)
      .then((response) => {
        navigate('/');
      })
      .catch((error) => {
        console.error('Error adding contact:', error);
      });
  };
  return (
    <div>
      <h1>Add New Contact</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            value={phoneno}
            onChange={(e) => setPhoneno(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Company:</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Job Title:</label>
          <input
            type="text"
            value={jobtitle}
            onChange={(e) => setJobtitle(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default AddContact;
