import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentStatus = () => {
  const location = useLocation();
  const [status, setStatus] = useState(null);
  const [reference, setReference] = useState(null);
  const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }


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
      
      <button className="button" onClick={handleClick} type="button">Return to home</button>
    </div>
  );
};

export default PaymentStatus;
