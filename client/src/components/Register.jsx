import React from "react"
import { Button, FilledInput, Radio, FormControl, FormLabel, FormControlLabel, RadioGroup } from "@material-ui/core";

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

  const [value, setValue] = React.useState("female");

  const handleChange = event => {
    setValue(event.target.value);
  };
 return (
   <div className="regi-container">
     <form action="" className="register-form">
       <FilledInput defaultValue="Name" fullWidth={true}></FilledInput>
       <FilledInput defaultValue="title" fullWidth={true}></FilledInput>
       <FilledInput defaultValue="email" fullWidth={true}></FilledInput>
       <FilledInput defaultValue="password" fullWidth={true}></FilledInput>
       <FilledInput defaultValue="description" fullWidth={true}></FilledInput>
       <FormControl component="fieldset">
         <FormLabel component="legend">Gender</FormLabel>
         <RadioGroup
           aria-label="gender"
           name="gender1"
           value={value}
           onChange={handleChange}
         >
           <FormControlLabel
             value="female"
             control={<Radio />}
             label="Female"
           />
           <FormControlLabel value="male" control={<Radio />} label="Male" />
         </RadioGroup>
       </FormControl>

       <Button variant="contained" color="primary" type="submit" name="Submit">
         Submit
       </Button>
     </form>
   </div>
 );
}



export default Register
