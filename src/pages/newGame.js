import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";

import Countdown from "./../components/ui/countdown";

export default class NewGame extends Component {
  state = {
    seconds: 30
  };

  componentDidMount() {
    this.countdown = setInterval(() => {
      const seconds = this.state.seconds;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }));
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.countdown);
  }

  render() {
    const styleCountDown = {
      width: "200px",
      marginTop: "50px",
      marginBottom: "50px"
    };
    const { seconds } = this.state;

    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <div style={styleCountDown}>
          <Countdown timer={seconds} />
        </div>

        <Button variant="outlined" size="large" color="primary">
          Start
        </Button>
      </Grid>
    );
  }
}
