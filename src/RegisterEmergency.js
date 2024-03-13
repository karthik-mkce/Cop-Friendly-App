
import React, { useState } from 'react';

function RegisterEmergency() {
  const [location, setLocation] = useState('');
  const [emergencyType, setEmergencyType] = useState('');
  const [peopleAffected, setPeopleAffected] = useState('');
  const [priority, setPriority] = useState('');

  const handleRegisterEmergency = (e) => {
    e.preventDefault();
    
  
    console.log({
      location,
      emergencyType,
      peopleAffected,
      priority
    });

  
    setLocation('');
    setEmergencyType('');
    setPeopleAffected('');
    setPriority('');
  };

  return (
    <div>
      <h2>Register Emergency</h2>
      <form onSubmit={handleRegisterEmergency}>
        <div>
          <label>Location:</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div>
          <label>Emergency Type:</label>
          <input type="text" value={emergencyType} onChange={(e) => setEmergencyType(e.target.value)} />
        </div>
        <div>
          <label>People Affected:</label>
          <input type="number" value={peopleAffected} onChange={(e) => setPeopleAffected(e.target.value)} />
        </div>
        <div>
          <label>Priority:</label>
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="">Select Priority</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <button type="submit">Register Emergency</button>
      </form>
    </div>
  );
}

export default RegisterEmergency;
