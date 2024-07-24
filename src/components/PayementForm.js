import React, { useState } from 'react';
import axios from 'axios';
import '../styles/payment_form.css';

const PaymentForm = () => {
    const [email, setEmail] = useState('');
    const [domain, setDomain] = useState('');
    const [amount] = useState(15);
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://04bd-41-42-189-154.ngrok-free.app/api/pay', { email, domain, amount });
            window.location.href = response.data.authorization_url.url;
        } catch (error) {
            console.error('Payment initialization error:', error);
            setStatus('Payment initialization failed');
        }
    };

    return (
        <div className="container">
            <h1 className="title">Pay for Your Domain</h1>
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className="input"
                />
                <input
                    type="text"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    placeholder="Domain"
                    required
                    className="input"
                />
                <button type="submit" className="button">Pay</button>
            </form>
            {status && <p className="status">{status}</p>}
        </div>
    );
};

export default PaymentForm;
