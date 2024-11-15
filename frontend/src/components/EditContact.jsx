import React, { useState, useEffect } from 'react';
import axios from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';

const EditContact = () => {
  const { id } = useParams();
  const [contact, setContact] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phoneno: '',
    company: '',
    jobtitle: '',
  });
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`/contacts/${id}`)
      .then((response) => {
        setContact(response.data);
      })
      .catch((error) => {
        console.error('Error fetching contact:', error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`/contacts/${id}`, contact)
      .then((response) => {
        navigate('/');
      })
      .catch((error) => {
        console.error('Error updating contact:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Edit Contact</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstname"
            value={contact.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastname"
            value={contact.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneno"
            value={contact.phoneno}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Company:</label>
          <input
            type="text"
            name="company"
            value={contact.company}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Job Title:</label>
          <input
            type="text"
            name="jobtitle"
            value={contact.jobtitle}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update Contact</button>
      </form>
    </div>
  );
};

export default EditContact;
