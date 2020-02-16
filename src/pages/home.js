import React, { Component } from "react";
import ThirtySecondsLogo from "./../logo.svg";
import { Link } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";

class Home extends Component {
  render() {
    const styleLogo = {
      marginTop: "50px",
      width: "250px"
    };

    const styleButton = {
      marginTop: "50px"
    };

    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <img src={ThirtySecondsLogo} style={styleLogo} alt="30 seconds logo" />
        <Button
          variant="outlined"
          size="large"
          color="primary"
          style={styleButton}
          component={Link}
          to="/new"
        >
          Start New Game
        </Button>
      </Grid>
    );
  }
}

export default Home;
