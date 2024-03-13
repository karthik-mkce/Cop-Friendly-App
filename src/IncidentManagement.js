
import React, { useState } from 'react';

function IncidentManagement() {
  const [incidents, setIncidents] = useState([]);
  const [newIncident, setNewIncident] = useState({
    location: '',
    type: '',
    status: ''
  });

  const handleAddIncident = () => {
   
    setIncidents([...incidents, newIncident]);
  
    setNewIncident({
      location: '',
      type: '',
      status: ''
    });
  };

  return (
    <div>
      <h2>Incident Management</h2>
      <div>
        <h3>Add New Incident</h3>
        <label>Location:</label>
        <input type="text" value={newIncident.location} onChange={(e) => setNewIncident({ ...newIncident, location: e.target.value })} />
        <label>Type:</label>
        <input type="text" value={newIncident.type} onChange={(e) => setNewIncident({ ...newIncident, type: e.target.value })} />
        <label>Status:</label>
        <input type="text" value={newIncident.status} onChange={(e) => setNewIncident({ ...newIncident, status: e.target.value })} />
        <button onClick={handleAddIncident}>Add Incident</button>
      </div>
      <div>
        <h3>Current Incidents</h3>
        <ul>
          {incidents.map((incident, index) => (
            <li key={index}>
              <strong>Location:</strong> {incident.location}, <strong>Type:</strong> {incident.type}, <strong>Status:</strong> {incident.status}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default IncidentManagement;
