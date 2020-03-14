import React from "react";
// import {
//   Button,
//   FilledInput,
// } from "@material-ui/core";

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

// export default Login;


const Login = (props) => {
  //  console.log("LOGIN COMPONENT", props);
  const { update, submit } = props
  const { email, password } = props.loginInfo
  return (
    <div className="registerCon">
      <div className="customRow">
        <div className="registerCol" sm={12}>
          <form className="registerForm" onSubmit={submit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                onChange={update}
                value={email}
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter Your Email"
              />
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                value={password}
                onChange={update}
              />
            </div>
            <button type="submit" value="Submit" data-type="login">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


export default Login