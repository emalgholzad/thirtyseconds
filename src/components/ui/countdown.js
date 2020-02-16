import React, { Component } from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default class Countdown extends Component {
  render() {
    const { timer } = this.props;

    return (
      <React.Fragment>
        <CircularProgressbar
          value={timer / 0.3}
          text={timer === 0 ? "STOP!" : timer}
          strokeWidth="5"
          styles={{
            // Customize the text
            text: {
              // Text color
              fill: "#3e98c7",
              // Text size
              fontSize: "25px"
            },
            // Customize background - only used when the `background` prop is true
            background: {
              fill: "#3e98c7"
            }
          }}
        />
      </React.Fragment>
    );
  }
}
