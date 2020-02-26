import React from "react";
// import { Button, Menu, MenuItem, Switch } from "@material-ui/core"
import { Button } from "@material-ui/core"
// Route if either A=I wanna swipe B=I wanna see who likes me
 import {
  Link
 } from "react-router-dom";



const Header = () => {
  // const [state, setState] = React.useState({
  //   checkedA: true,
  //   checkedB: true
  // });
  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleChange = name => event => {
  //   setState({ ...state, [name]: event.target.checked });
  // };

  // const handleClick = event => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  //   // Reroute/render the appropriate page
  // };
  return (
    <div>
      <ul>
        <li>
          <Link to="/profilename">
            <Button>Profile</Button>
          </Link>
        </li>
        <li>
          <Link to="/">
            <Button>SWIPER TO LIKEHER</Button>
          </Link>
        </li>
        <li>
          <Link to="/matches">
            <Button>Matches</Button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;



/**
 *  <Button>Swipe</Button>
      <Button>Liked</Button> 

       <Switch
        checked={state.checkedA}
        onChange={handleChange("checkedA")}
        value="checkedA"
        inputProps={{ "aria-label": "secondary checkbox" }}
      /> 

 */