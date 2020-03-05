import React from 'react';
import { Route, Redirect } from "react-router-dom"




const checkIfLogged = () => {
  const ses = sessionStorage.getItem("User");
  const parsedSes = JSON.parse(ses);
  // If logged in
  if (parsedSes) {
    return true
  } else {
    return false
  }
};

const PrivateRoute = ({ children, ...rest }) => {
  return (
  <Route
      {...rest}
      render={({ location }) =>
        checkIfLogged() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/auth/register",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;