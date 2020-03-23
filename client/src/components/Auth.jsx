import React from 'react';
import { Link } from "react-router-dom"
import { Button } from '@material-ui/core';

const Auth = () => {
  return (
    <nav>
      <Link to="/auth/register">
        <Button>
          Register
        </Button>
      </Link>
      
      <Link to="/auth/login">
        <Button>
          Login
        </Button>
      </Link>
    </nav>
  );
}
  
export default Auth;
  