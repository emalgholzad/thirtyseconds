import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";

export default class NewGame extends Component {
  render() {
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <Button variant="outlined" size="large" color="primary">
          Start
        </Button>
      </Grid>
    );
  }
}
