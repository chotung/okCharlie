import React from "react";
// import { Button, Menu, MenuItem, Switch } from "@material-ui/core"
import { Button } from "@material-ui/core"
// Route if either A=I wanna swipe B=I wanna see who likes me
 import {
  Link
 } from "react-router-dom";

 const hStyles = {
   container : {
     display: "flex",
     listStyle: "none",
     justifyContent: "center",
     padding: "0"
   }
 }


const Header = () => {
  return (
    <div>
      <ul style={hStyles.container}>
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