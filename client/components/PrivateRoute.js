/* eslint-disable */
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../api/auth-helper';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    render={props => (
      auth.isAuthenticated()
        ? (
          <Component {...props} />
        )
        : (
          <Redirect to={{
            pathname: '/signin',
            state: { from: props.location },
          }}
          />
        )
    )}
    {...rest}
  />
);

export default PrivateRoute;
