import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaymentForm from './components/PayementForm';
import PaymentStatus from './components/PayementStatus';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/payment-status" element={<PaymentStatus />} />
          <Route path="/" element={<PaymentForm />} />
        </Routes>
      </Router>
  );
}

export default App;
