import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory, useLocation, withRouter } from 'react-router-dom';
import { useAuth } from 'use-auth';
// import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const location = useLocation();
  const auth = useAuth();
  // @ts-ignore
  const { from } = location.state || { from: { pathname: '/' } };

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    // POST login request
    await auth.signin(email, password);

    // Redirect on successful login
    history.replace(from);
  };

  return (
    <div className="Login">
      <p>You must log in to view the page at {from.pathname}</p>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default withRouter(Login);
