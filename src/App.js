import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  NavLink,
} from 'react-router-dom';
import './App.css';
import Timecards from './Timecards';
import ViewTimecard from './ViewTimecard';
import { Button, Nav, Navbar } from 'react-bootstrap';
import Login from './Login';
import { ProvideAuth, useAuth } from './use-auth';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <ProvideAuth>
      <Router basename="/my-booker">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/timecards">
              Timecards
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
        </Switch>
      </Router>
    </ProvideAuth>
  );
};

/** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */

const AuthButton = () => {
  let history = useHistory();
  let auth = useAuth();

  return auth.user ? (
    <p style={{ color: 'white' }}>
      Welcome!{' '}
      <Button
        variant="danger"
        onClick={() => {
          auth.signout(() => history.push('/'));
        }}
      >
        Sign out
      </Button>
    </p>
  ) : (
    <p style={{ color: 'white' }}>You are not logged in.</p>
  );
};

export default App;
