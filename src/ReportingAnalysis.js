
import React, { useState } from 'react';

function ReportingAnalysis() {
  const [reportType, setReportType] = useState('traffic');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleGenerateReport = () => {
   
    console.log('Generating report...', reportType, startDate, endDate);
  };

  return (
    <div>
      <h2>Reporting and Analysis</h2>
      <div>
        <label>Select Report Type:</label>
        <select value={reportType} onChange={(e) => setReportType(e.target.value)}>
          <option value="traffic">Traffic</option>
          <option value="incident">Incident</option>
          
        </select>
      </div>
      <div>
        <label>Start Date:</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </div>
      <div>
        <label>End Date:</label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </div>
      <button onClick={handleGenerateReport}>Generate Report</button>
    </div>
  );
}

export default ReportingAnalysis;
