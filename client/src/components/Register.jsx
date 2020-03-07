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
  const { handleChange, handleSubmit, value } = props
  const { name } = props.regiState
 return (
   <div className="regi-container">
     <form action="" className="register-form" onSubmit={handleSubmit}>
       <FilledInput
         name="name"
         placeholder="Name"
         fullWidth={true}
         onChange={handleChange}
       ></FilledInput>
       <FilledInput
         name="title"
         placeholder="title"
         fullWidth={true}
         onChange={handleChange}
       ></FilledInput>
       <FilledInput
         name="email"
         placeholder="email"
         fullWidth={true}
         onChange={handleChange}
       ></FilledInput>
       <FilledInput
         name="password"
         placeholder="password"
         fullWidth={true}
         onChange={handleChange}
       ></FilledInput>
       <FilledInput
         name="description"
         placeholder="description"
         fullWidth={true}
         onChange={handleChange}
       ></FilledInput>
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
