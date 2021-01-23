import React, { createContext, useContext, useState } from 'react';
import { login } from './api';

export const authContext = createContext(null);

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

const useProvideAuth = () => {
  const [user, setUser] = useState(localStorage.getItem('user'));
  const [token, setToken] = useState(localStorage.getItem('token'));

  const signin = async (email, password) => {
    try {
      console.log('Signing in from useProvideAuth...');
      const res = await login(email, password);
      console.log(res);
      if (res.user && res.accessToken) {
        console.log('Success!');
        setUser(res.user);
        localStorage.setItem('user', JSON.stringify(user));
        setToken(res.accessToken);
        localStorage.setItem('token', res.accessToken);
      } else {
        console.log('Login failure...');
        console.log(res);
      }
    } catch (e) {
      console.log('Unable to sign in...');
      console.log(e);
    }
  };

  const signout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return {
    user,
    token,
    signin,
    signout,
  };
};
