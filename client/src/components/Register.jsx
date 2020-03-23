import React from "react"
import { Button, FilledInput, Radio, FormControl, FormLabel, FormGroup, FormControlLabel, RadioGroup } from "@material-ui/core";

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

const Register = (props) => {
  const { update, submit } = props
  const { name, title, password, description, interestedIn, sex, passwordConfirmation } = props.registerInfo
 return (
   <div className="regi-container">
     <form action="" className="register-form" onSubmit={submit}>
       <FormGroup>
         <FilledInput
           name="name"
           placeholder="Name"
           //  fullWidth={true}
           value={name}
           onChange={update}
         ></FilledInput>
         <FilledInput
           name="title"
           value={title}
           placeholder="title"
           //  fullWidth={true}
           onChange={update}
         ></FilledInput>
         <FilledInput
           //  value={email}
           name="email"
           placeholder="email"
           type="email"
           //  fullWidth={true}
           onChange={update}
         ></FilledInput>
         <FilledInput
           value={password}
           name="password"
           type="password"
           placeholder="password"
           //  fullWidth={true}
           onChange={update}
         ></FilledInput>
         <FilledInput
           value={passwordConfirmation}
           name="confirm-password"
           type="password"
           placeholder="confirm password"
           //  fullWidth={true}
           onChange={update}
         ></FilledInput>
         <FilledInput
           value={description}
           name="description"
           placeholder="description"
           //  fullWidth={true}
           onChange={update}
         ></FilledInput>
         <FormControl component="fieldset">
           <FormLabel component="legend">Sex</FormLabel>
           <RadioGroup
             aria-label="gender"
             name="sex"
             value={sex}
             onChange={update}
           >
             <FormControlLabel
               value="female"
               control={<Radio />}
               label="Female"
             />
             <FormControlLabel value="male" control={<Radio />} label="Male" />
           </RadioGroup>
         </FormControl>
         <FormControl component="fieldset">
           <FormLabel component="legend">Interested In</FormLabel>
           <RadioGroup
             aria-label="interestedIn"
             name="interestedIn"
             value={interestedIn}
             onChange={update}
           >
             <FormControlLabel
               value="female"
               control={<Radio />}
               label="Female"
             />
             <FormControlLabel value="male" control={<Radio />} label="Male" />
           </RadioGroup>
         </FormControl>
       </FormGroup>

       <Button
         variant="contained"
         color="primary"
         type="submit"
         name="Submit"
         data-type="register"
       >
         Submit
       </Button>
     </form>
   </div>
 );
}



export default Register
