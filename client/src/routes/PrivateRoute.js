import React from 'react';
import { any } from 'prop-types';
import { Route, Redirect } from "react-router-dom";

// eslint-disable-next-line import/no-unresolved
import { useAuth } from "context/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
            <Redirect to="/login-page" />
          )
      }
    />
  );
}

PrivateRoute.propTypes = {
  component: any
}

export default PrivateRoute;

