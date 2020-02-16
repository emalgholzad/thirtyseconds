import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" color="inherit">
          30 Seconds
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
