
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register-violation">Register Violation</Link></li>
        <li><Link to="/issue-ticket">Issue Ticket</Link></li>
        <li><Link to="/accept-payment">Accept Payment</Link></li>
        <li><Link to="/register-emergency">Register Emergency</Link></li>
      </ul>

  <Route exact path="/" component={TrafficMonitoring} />
          <Route path="/incident-management" component={IncidentManagement} />
          <Route path="/traffic-control" component={TrafficControl} />
          <Route path="/public-communication" component={PublicCommunication} />
          <Route path="/reporting-analysis" component={ReportingAnalysis} />
    </nav>
<ul>
        <li><Link to="/">Dashboard</Link></li>
        </ul>
  );
}

export default Navbar;
