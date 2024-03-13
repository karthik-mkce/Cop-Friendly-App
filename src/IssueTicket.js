
import React, { useState, useEffect } from 'react';

function IssueTicket() {
  const [violations, setViolations] = useState([]);
  const [selectedViolation, setSelectedViolation] = useState('');
  const [fineAmount, setFineAmount] = useState('');
  const [paymentAccepted, setPaymentAccepted] = useState(false);

 
  useEffect(() => {
    
    const fetchedViolations = [
      { id: 1, violatorName: 'John Doe', violationType: 'Speeding', fineAmount: 100 },
      { id: 2, violatorName: 'Jane Smith', violationType: 'Running Red Light', fineAmount: 150 },
      
    ];
    setViolations(fetchedViolations);
  }, []);

  const handleIssueTicket = (e) => {
    e.preventDefault();
    
 
    console.log({
      selectedViolation,
      fineAmount,
      paymentAccepted
    });

    // Reset form fields
    setSelectedViolation('');
    setFineAmount('');
    setPaymentAccepted(false);
  };

  return (
    <div>
      <h2>Issue Ticket</h2>
      <form onSubmit={handleIssueTicket}>
        <div>
          <label>Select Violation:</label>
          <select value={selectedViolation} onChange={(e) => setSelectedViolation(e.target.value)}>
            <option value="">Select Violation</option>
            {violations.map(violation => (
              <option key={violation.id} value={violation.id}>{violation.violatorName} - {violation.violationType}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Fine Amount:</label>
          <input type="number" value={fineAmount} onChange={(e) => setFineAmount(e.target.value)} />
        </div>
        <div>
          <label>Payment Accepted:</label>
          <input type="checkbox" checked={paymentAccepted} onChange={(e) => setPaymentAccepted(e.target.checked)} />
        </div>
        <button type="submit">Issue Ticket</button>
      </form>
    </div>
  );
}

export default IssueTicket;
