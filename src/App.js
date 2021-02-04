import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import './App.css';
import Timecards from './Timecards';
import ViewTimecard from './ViewTimecard';
import { Nav, Navbar } from 'react-bootstrap';
import Login from './Login';
import { ProvideAuth } from './use-auth';
import PrivateRoute from './PrivateRoute';
import AuthButton from './AuthButton';
import HolidayPay from 'HolidayPay';

const App = () => {
  return (
    <ProvideAuth>
      <Router basename="/my-booker">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/timecards">
              Timecards
            </Nav.Link>
            <Nav.Link as={NavLink} to="/holiday-pay-calculator">
              Holiday Pay Calculator
            </Nav.Link>
          </Nav>
          <AuthButton />
        </Navbar>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/timecards" exact>
            <Timecards />
          </PrivateRoute>
          <PrivateRoute path="/timecards/view">
            <ViewTimecard />
          </PrivateRoute>
          <PrivateRoute path="/holiday-pay-calculator" exact>
            <HolidayPay />
          </PrivateRoute>
        </Switch>
      </Router>
    </ProvideAuth>
  );
};

export default App;
