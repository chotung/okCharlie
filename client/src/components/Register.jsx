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
  const { handleChange, handleSubmit } = props
  const { name, title, password, description, interestedIn, sex } = props.registerInfo
 return (
   <div className="regi-container">
     <form action="" className="register-form" onSubmit={handleSubmit}>
       <FilledInput
         name="name"
         placeholder="Name"
         fullWidth={true}
         value={name}
         onChange={handleChange}
       ></FilledInput>
       <FilledInput
         name="title"
         value={title}
         placeholder="title"
         fullWidth={true}
         onChange={handleChange}
       ></FilledInput>
       <FilledInput
        //  value={email}
         name="email"
         placeholder="email"
         type="email"
         fullWidth={true}
         onChange={handleChange}
       ></FilledInput>
       <FilledInput
         value={password}
         name="password"
         type="password"
         placeholder="password"
         fullWidth={true}
         onChange={handleChange}
       ></FilledInput>
       <FilledInput
         value={password}
         name="confirm-password"
         type="confirm-password"
         placeholder="confirm password"
         fullWidth={true}
         onChange={handleChange}
       ></FilledInput>
       <FilledInput
         value={description}
         name="description"
         placeholder="description"
         fullWidth={true}
         onChange={handleChange}
       ></FilledInput>
       <FormControl component="fieldset">
         <FormLabel component="legend">Sex</FormLabel>
         <RadioGroup
           aria-label="gender"
           name="sex"
           value={sex}
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
       <FormControl component="fieldset">
         <FormLabel component="legend">Interested In</FormLabel>
         <RadioGroup
           aria-label="interestedIn"
           name="interestedIn"
           value={interestedIn}
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
