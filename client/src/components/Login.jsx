import React from "react";
import {
  Button,
  FilledInput,
  InputLabel,
  FormGroup  
} from "@material-ui/core";

// /**
//  * NAME
//  * PASSWORD
//  * EMAIL
//  * TITLE
//  * INTERESTED IN
//  * SEX
//  * LOCATION*** DON'T IMPLEMENT YET
//  * DESCRIPTION
//  * ADD A PLCE TO UPLOAD IMAGES ************ DON'T IMPLEMENT YET
//  */

// const Login = props => {
//   return (
//     <div className="regi-container">
//       <form action="" className="register-form">
//         <FilledInput defaultValue="Email" fullWidth={true}></FilledInput>
//         <FilledInput defaultValue="Password" fullWidth={true}></FilledInput>
//         <Button variant="contained" color="primary" type="submit" name="Submit">
//           Submit
//         </Button>
//       </form>
//     </div>
//   );
// };

const Login = (props) => {
  //  console.log("LOGIN COMPONENT", props);
  const { update, submit } = props
  const { email, password } = props.loginInfo
  return (
    <div className="registerCon">
      <div className="customRow">
        <div className="registerCol" sm={12}>
          <form className="registerForm" onSubmit={submit}>
            <FormGroup  className="form-group">
              <InputLabel htmlFor="email">Email</InputLabel>
              <FilledInput
                onChange={update}
                value={email}
                name="email"
                // type="email"
                className="form-control"
                placeholder="Enter Your Email"
              />
              <InputLabel htmlFor="password">Password</InputLabel>
              <FilledInput
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={update}
              />
            </FormGroup >
            <Button variant="contained" color="primary" type="submit" value="Submit" data-type="login">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login