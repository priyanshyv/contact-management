import React, { useEffect, useState } from 'react';
import axios from '../services/api';
import { useNavigate } from 'react-router-dom';

const ListPage = () => {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/contacts')
      .then(response => {
        setContacts(response.data);
      })
      .catch(error => {
        console.error('Error fetching contacts:', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/contacts/${id}`)
      .then(() => {
        setContacts(contacts.filter(contact => contact._id !== id));
      })
      .catch((error) => {
        console.error('Error deleting contact:', error);
      });
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleAdd = () =>{
    navigate('/add');
  }
  return (
    <div>
      <h1>Contact List</h1> <button onClick={handleAdd}>add contact</button>
      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <ul>
          {contacts.map(contact => (
            <li key={contact._id}>
              {contact.firstname} {contact.lastname} - {contact.email}
              <br />
              {contact.email} - {contact.phoneno}
              <br />
              {contact.company} - {contact.jobtitle}
              <button onClick={() => handleEdit(contact._id)}>Edit</button>
              <button onClick={() => handleDelete(contact._id)}>Delete</button>
              <br /><br /><br /><br />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListPage;

