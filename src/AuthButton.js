import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useAuth } from './use-auth';

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

export default AuthButton;
