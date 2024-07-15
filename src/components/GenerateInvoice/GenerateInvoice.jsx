/* eslint-disable no-unused-vars */
// src/components/GenerateInvoice.js
import React, { useState } from 'react';
import api from '../../services/api';
import ClientDropdown from '../ClientDropdown/ClientDropdown';
import DateRangePicker from '../DateRangePicker/DateRangePicker';
import InvoiceList from '../InvoiceList/InvoiceList';
import Layout from '../Layouts/Layout';

const GenerateInvoice = () => {
  const [clientId, setClientId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [invoices, setInvoices] = useState([]);

  const handleGenerate = async () => {
    const response = await api.post('/invoices/generate', {
      client_id: clientId,
      start_date: startDate,
      end_date: endDate
    });
    setInvoices([response.data]);
  };

  return (
    <Layout>
      <div className="container mt-4">
        <ClientDropdown onSelectClient={setClientId} />
        <DateRangePicker startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} />
        <button className="btn btn-primary mt-2" onClick={handleGenerate}>Generate Invoice</button>
        <InvoiceList invoices={invoices} />
      </div>
    </Layout>
  );
};

export default GenerateInvoice;
