import React from "react";
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import "./App.css";
import Timecards from "./Timecards";
import ViewTimecard from "./ViewTimecard";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Login from "./Login";
import { ProvideAuth } from "./use-auth";
import PrivateRoute from "./PrivateRoute";
import AuthButton from "./AuthButton";
import HolidayPay from "HolidayPay";

const App = () => {
  return (
    <ProvideAuth>
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/timecards">
              Timecards
            </Nav.Link>
            <Nav.Link as={NavLink} to="/holiday-pay-calculator">
              Holiday Pay Calculator
            </Nav.Link>
            <a
              className="nav-link"
              href="https://chat.google.com/u/1/room/AAAA1tx9m64"
              target="_blank"
              rel="noreferrer"
            >
              Team Chat
            </a>
            <a
              className="nav-link"
              href="https://snapnurse.paymint.today/worker/timecards"
              target="_blank"
              rel="noreferrer"
            >
              Internal Payroll
            </a>
            <a
              className="nav-link"
              href="https://mail.google.com/mail/u/1/#inbox"
              target="_blank"
              rel="noreferrer"
            >
              Gmail
            </a>
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
          <Route path="/holiday-pay-calculator">
            <HolidayPay />
          </Route>
        </Switch>
      </Router>
    </ProvideAuth>
  );
};

export default App;
