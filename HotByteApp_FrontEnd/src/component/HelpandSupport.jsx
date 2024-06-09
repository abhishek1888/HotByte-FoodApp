import React from 'react';
import { Link } from 'react-router-dom';

export const HelpandSupport = () => {
  return (
    <div className="container">
      <div style={{ flexGrow: 1 }}>
        <div style={{ position: 'relative', padding: '0 20px', background: '#2C3E50', minHeight: '100vh', color: '#ECF0F1' }}>
          <div style={{ marginBottom: '30px', marginTop: '30px', position: 'relative', textAlign: 'center' }}>
            <Link to="/">
              <button className="btn btn-primary mt-3" style={{ width: '150px',
                  height: '60px',
                  backgroundColor: '#F39C12',
                  color: '#2C3E50',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '1.1em',
                  padding: '10px 20px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'background-color 0.3s', }}>
                Back to Main Page
              </button>
            </Link>
            <div style={{ marginTop: '20px' }}>
              <h1 style={{ fontSize: '2.5em' }}>Help &amp; Support</h1>
              <p style={{ fontSize: '1.2em' }}>Let's take a step ahead and help you better.</p>
            </div>
          </div>
          <div style={{ background: '#ECF0F1', borderRadius: '10px', padding: '30px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', color: '#2C3E50' }}>
            <div>
              <p style={{ marginBottom: '10px' }}><strong>Contact No:</strong> 678934092</p>
              <p style={{ marginBottom: '20px' }}><strong>Address:</strong> Vikesh Nagar</p>
              <p style={{ marginBottom: '10px' }}><strong>Most Popular Questions Asked:</strong></p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '10px' }}>How do I place an order?</li>
                <li style={{ marginBottom: '10px' }}>What payment methods are accepted?</li>
                <li style={{ marginBottom: '10px' }}>How can I track my order?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};