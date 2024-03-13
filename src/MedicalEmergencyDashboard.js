
import React, { useState, useEffect } from 'react';

function MedicalEmergencyDashboard() {
  const [emergencies, setEmergencies] = useState([]);

  useEffect(() => {
   
    const fetchedEmergencies = [
      { location: 'Hospital A', type: 'Cardiac Arrest', priority: 'High' },
      { location: 'Clinic B', type: 'Trauma Injury', priority: 'Medium' },
     
    ];
    setEmergencies(fetchedEmergencies);
  }, []);

  const handleSendAmbulance = (location) => {
    
    console.log('Sending ambulance to:', location);
  };

  return (
    <div>
      <h2>Medical Emergency Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Type</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {emergencies.map((emergency, index) => (
            <tr key={index}>
              <td>{emergency.location}</td>
              <td>{emergency.type}</td>
              <td>{emergency.priority}</td>
              <td>
                <button onClick={() => handleSendAmbulance(emergency.location)}>Send Ambulance</button>
                {/* Add more action buttons if needed */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MedicalEmergencyDashboard;
