import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/payment_status.css';

const PaymentStatus = () => {
  const location = useLocation();
  const [status, setStatus] = useState(null);
  const [reference, setReference] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setStatus(queryParams.get('status'));
    setReference(queryParams.get('reference'));
  }, [location.search]);

  return (
    <div className="container">
      {status === 'success' ? (
        <div className="success">
          <h1>Payment Successful</h1>
          <p>Your payment was successful. Reference: {reference}</p>
        </div>
      ) : (
        <div className="failure">
          <h1>Payment Failed</h1>
          <p>There was an issue with your payment. Reference: {reference}</p>
        </div>
      )}
      
    </div>
  );
};

export default PaymentStatus;
