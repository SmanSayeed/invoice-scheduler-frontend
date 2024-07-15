/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/ClientDropdown.js
import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Layout from '../Layouts/Layout';

const ClientDropdown = ({ onSelectClient }) => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      const response = await api.get('/clients');
      setClients(response.data);
    };
    fetchClients();
  }, []);

  return (
    <>

    <div className='container'>
    
    <div className="form-group">
      <label htmlFor="clientSelect">Select client</label>
      <select
        id="clientSelect"
        className="form-control"
        onChange={(e) => onSelectClient(e.target.value)}
      >
        <option value="">Select a client</option>
        {clients.map((client, index) => (
          <option key={index} value={client.id}>{client.name}</option>
        ))}
      </select>
    </div>

    </div>
    </>
    
   
  );
};

export default ClientDropdown;
