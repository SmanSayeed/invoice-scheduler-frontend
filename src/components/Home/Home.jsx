/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Layout from '../Layouts/Layout';
import ClientDropdown from '../ClientDropdown/ClientDropdown';
import api from '../../services/api';
import { Card, Row, Col, Button } from 'react-bootstrap';
import './Home.css';  // Optional: to style the cards

const Home = () => {
  const [clientId, setClientId] = useState('');
  const [invoices, setInvoices] = useState([]);
  const [fetch, setFetch] = useState(false);

  useEffect(() => {
    if (fetch && clientId) {
      const fetchInvoices = async () => {
        try {
          const response = await api.get(`/clients/${clientId}/invoices`);
          setInvoices(response.data);
        } catch (error) {
          console.error('Error fetching invoices:', error);
        }
      };
      fetchInvoices();
      setFetch(false);
    }
  }, [fetch, clientId]);

  const handleFetchInvoices = () => {
    setFetch(true);
  };

  return (
    <Layout>
      <div className="container mt-4">
        <ClientDropdown onSelectClient={setClientId} />
        <Button className="mt-3" onClick={handleFetchInvoices}>Fetch Invoices</Button>
        <Row className="mt-4">
          {invoices.map((invoice) => (
            <Col sm={12} md={6} lg={4} key={invoice.id} className="mb-4">
              <Card>
                <Card.Header>Invoice #{invoice.invoice_number}</Card.Header>
                <Card.Body>
                  <Card.Title>Client ID: {invoice.client_id}</Card.Title>
                  <Card.Text>
                    <strong>Invoice Date:</strong> {invoice.invoice_date}<br />
                    <strong>Due Date:</strong> {invoice.due_date}<br />
                    <strong>Status:</strong> {invoice.status}<br />
                    <strong>Total Cost:</strong> ${invoice.total_cost}<br />
                  </Card.Text>
                  <Card.Text>
                    <strong>Items:</strong>
                    <ul>
                      {invoice.items.map((item) => (
                        <li key={item.id}>
                          <strong>Device:</strong> {item.device.name} ({item.device.class})<br />
                          <strong>Service:</strong> {item.service}<br />
                          <strong>Unit Cost:</strong> ${item.unit_cost}<br />
                          <strong>Total Cost:</strong> ${item.total_cost}<br />
                          <strong>Number of Days:</strong> {item.number_of_days}
                        </li>
                      ))}
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Layout>
  );
};

export default Home;
