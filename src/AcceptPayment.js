
import React, { useState } from 'react';

function AcceptPayment() {
  const [ticketNumber, setTicketNumber] = useState('');
  const [amountPaid, setAmountPaid] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleAcceptPayment = (e) => {
    e.preventDefault();
    
    // Your logic to accept the payment here
    console.log({
      ticketNumber,
      amountPaid,
      paymentMethod
    });

    // Reset form fields
    setTicketNumber('');
    setAmountPaid('');
    setPaymentMethod('');
  };

  return (
    <div>
      <h2>Accept Payment</h2>
      <form onSubmit={handleAcceptPayment}>
        <div>
          <label>Ticket Number:</label>
          <input type="text" value={ticketNumber} onChange={(e) => setTicketNumber(e.target.value)} />
        </div>
        <div>
          <label>Amount Paid:</label>
          <input type="number" value={amountPaid} onChange={(e) => setAmountPaid(e.target.value)} />
        </div>
        <div>
          <label>Payment Method:</label>
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option value="">Select Payment Method</option>
            <option value="cash">Cash</option>
            <option value="card">Card</option>
            <option value="online">Online</option>
          </select>
        </div>
        <button type="submit">Accept Payment</button>
      </form>
    </div>
  );
}

export default AcceptPayment;
