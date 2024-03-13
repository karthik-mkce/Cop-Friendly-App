
import React, { useState } from 'react';

function RegisterViolation() {
  const [violatorName, setViolatorName] = useState('');
  const [violationType, setViolationType] = useState('');
  const [license, setLicense] = useState('');
  const [vehicleDetails, setVehicleDetails] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [location, setLocation] = useState('');
  const [repeatedOffender, setRepeatedOffender] = useState(false);
  const [otherDetails, setOtherDetails] = useState('');

  const handleRegisterViolation = (e) => {
    e.preventDefault();
    
  
    console.log({
      violatorName,
      violationType,
      license,
      vehicleDetails,
      dateTime,
      location,
      repeatedOffender,
      otherDetails
    });

    // Reset form fields
    setViolatorName('');
    setViolationType('');
    setLicense('');
    setVehicleDetails('');
    setDateTime('');
    setLocation('');
    setRepeatedOffender(false);
    setOtherDetails('');
  };

  return (
    <div>
      <h2>Register Violation</h2>
      <form onSubmit={handleRegisterViolation}>
        <div>
          <label>Violator's Name:</label>
          <input type="text" value={violatorName} onChange={(e) => setViolatorName(e.target.value)} />
        </div>
        <div>
          <label>Violation Type:</label>
          <input type="text" value={violationType} onChange={(e) => setViolationType(e.target.value)} />
        </div>
        <div>
          <label>Driving License:</label>
          <input type="text" value={license} onChange={(e) => setLicense(e.target.value)} />
        </div>
        <div>
          <label>Vehicle Details:</label>
          <input type="text" value={vehicleDetails} onChange={(e) => setVehicleDetails(e.target.value)} />
        </div>
        <div>
          <label>Date and Time:</label>
          <input type="datetime-local" value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div>
          <label>Repeated Offender:</label>
          <input type="checkbox" checked={repeatedOffender} onChange={(e) => setRepeatedOffender(e.target.checked)} />
        </div>
        <div>
          <label>Other Details:</label>
          <textarea value={otherDetails} onChange={(e) => setOtherDetails(e.target.value)}></textarea>
        </div>
        <button type="submit">Register Violation</button>
      </form>
    </div>
  );
}

export default RegisterViolation;
