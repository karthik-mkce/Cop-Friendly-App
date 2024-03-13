
import React, { useState, useEffect } from 'react';

function TrafficMonitoring() {
  const [trafficData, setTrafficData] = useState([]);

 
  useEffect(() => {
   
    const fetchedTrafficData = [
      { location: 'Intersection A', status: 'Heavy traffic', vehicles: 50 },
      { location: 'Intersection B', status: 'Moderate traffic', vehicles: 30 },
      { location: 'Intersection C', status: 'Light traffic', vehicles: 20 },
     
    ];
    setTrafficData(fetchedTrafficData);
  }, []);

  return (
    <div>
      <h2>Traffic Monitoring</h2>
      <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Status</th>
            <th>No. of Vehicles</th>
          </tr>
        </thead>
        <tbody>
          {trafficData.map((traffic, index) => (
            <tr key={index}>
              <td>{traffic.location}</td>
              <td>{traffic.status}</td>
              <td>{traffic.vehicles}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrafficMonitoring;
