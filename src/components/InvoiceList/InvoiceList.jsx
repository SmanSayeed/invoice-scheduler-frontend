// src/components/InvoiceList.js
import React from 'react';
import { Table, Button } from 'react-bootstrap';
import api from '../../services/api';

const InvoiceList = ({ invoices }) => {
    console.log("invoices ",invoices);
  const sendInvoiceEmail = async (invoiceId) => {
    await api.post(`/invoices/${invoiceId}/send`);
    alert('Invoice email sent!');
  };

  return (
    <div className="mt-4">
      {invoices.map((invoice,i) => (
        <div key={i} className="shadow-lg p-3 mb-5 bg-white rounded">
          <h3>Invoice #{invoice.invoice_number}</h3>
          <p>Client: {invoice.client ? invoice.client?.name : 'Loading...'}</p>
          <p>Date: {invoice.invoice_date}</p>
          <p>Due Date: {invoice.due_date}</p>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Device</th>
                <th>Service</th>
                <th>Unit Cost</th>
                {/* Add more table headers if needed */}
              </tr>
            </thead>
            <tbody>
              {invoice.items.map(item => (
                <tr key={item.id}>
                  <td>{item?.device?.name}</td>
                  <td>{item?.service}</td>
                  <td>${item?.unit_cost}</td>
                  {/* Add more table cells for other item details */}
                </tr>
              ))}
            </tbody>
          </Table>
          <Button variant="primary" onClick={() => sendInvoiceEmail(invoice.id)}>Send Email</Button>
        </div>
      ))}
    </div>
  );
};

export default InvoiceList;
