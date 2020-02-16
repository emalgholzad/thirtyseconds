import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";

import Countdown from "./../components/ui/countdown";

export default class NewGame extends Component {
  state = {
    seconds: 30,
    showStartButton: true
  };

  // componentDidMount() {
  //   this.countdown = setInterval(() => {
  //     const seconds = this.state.seconds;

  //     if (seconds > 0) {
  //       this.setState(({ seconds }) => ({
  //         seconds: seconds - 1
  //       }));
  //     }
  //   }, 1000);
  // }

  handleCountdown = () => {
    this.setState({
      showStartButton: false
    });

    this.countdown = setInterval(() => {
      const seconds = this.state.seconds;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }));
      }
    }, 1000);
  };

  // componentWillUnmount() {
  //   clearInterval(this.countdown);
  // }

  render() {
    const styleCountDown = {
      width: "200px",
      marginTop: "50px",
      marginBottom: "50px"
    };
    const { seconds, showStartButton } = this.state;

    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <div style={styleCountDown}>
          <Countdown timer={seconds} />
        </div>

        {showStartButton && (
          <Button
            variant="outlined"
            size="large"
            color="primary"
            onClick={this.handleCountdown}
          >
            Start
          </Button>
        )}
      </Grid>
    );
  }
}
