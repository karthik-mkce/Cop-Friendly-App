import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisterViolation from './pages/RegisterViolation';
import IssueTicket from './pages/IssueTicket';
import AcceptPayment from './pages/AcceptPayment';
import RegisterEmergency from './pages/RegisterEmergency';
import SOSButton from './components/SOSButton';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register-violation" component={RegisterViolation} />
          <Route path="/issue-ticket" component={IssueTicket} />
          <Route path="/accept-payment" component={AcceptPayment} />
          <Route path="/register-emergency" component={RegisterEmergency} />
        </Switch>
        <SOSButton />
      </div>
    </Router>
  );
}

export default App;

