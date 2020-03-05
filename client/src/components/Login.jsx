import React from "react";
import {
  Button,
  FilledInput,
} from "@material-ui/core";

/**
 * NAME
 * PASSWORD
 * EMAIL
 * TITLE
 * INTERESTED IN
 * SEX
 * LOCATION*** DON'T IMPLEMENT YET
 * DESCRIPTION
 * ADD A PLCE TO UPLOAD IMAGES ************ DON'T IMPLEMENT YET
 */

const Login = props => {
  return (
    <div className="regi-container">
      <form action="" className="register-form">
        <FilledInput defaultValue="Email" fullWidth={true}></FilledInput>
        <FilledInput defaultValue="Password" fullWidth={true}></FilledInput>
        <Button variant="contained" color="primary" type="submit" name="Submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Login;
