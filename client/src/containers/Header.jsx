import React from "react";
import { Button, Menu, MenuItem, Switch } from "@material-ui/core"


const Header = () => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true
  });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    // Reroute/render the appropriate page
  };

  console.log(anchorEl);
  return (
    <div>
      <Button>Profile</Button>
      {/* <Button>Swipe</Button>
      <Button>Liked</Button> */}

      <Switch
        checked={state.checkedA}
        onChange={handleChange("checkedA")}
        value="checkedA"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <Button>Matches</Button>
    </div>
  );
}

export default Header;


/**
 * 
 * 
 * import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

 */