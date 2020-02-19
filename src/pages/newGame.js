import React, { Component } from "react";
import { Grid, Button, ListItem, ListItemText } from "@material-ui/core";

import Countdown from "./../components/ui/countdown";
import { getWords } from "./../services/Words";
import { shuffleArray } from "./../utils/words";

export default class NewGame extends Component {
  state = {
    seconds: 30,
    showStartButton: true,
    words: [],
    maxWords: 3,
    grabWordsToPlay: []
  };

  async componentDidMount() {
    this.setState({
      words: await getWords()
    });
  }

  handleCountdown = () => {
    // Shuffle words
    const shuffledArray = shuffleArray(this.state.words);

    // Grab max words
    this.setState({
      grabWordsToPlay: shuffledArray.slice(0, this.state.maxWords)
    });

    // Hide start button
    this.setState({
      showStartButton: false
    });

    // Start countdown
    this.countdown = setInterval(() => {
      const seconds = this.state.seconds;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }));
      }
    }, 1000);
  };

  render() {
    const styleCountDown = {
      width: "200px",
      marginTop: "50px",
      marginBottom: "50px"
    };
    const styleListItem = {
      with: "200px",
      margin: "0 auto"
    };
    const { seconds, showStartButton, grabWordsToPlay } = this.state;

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

        {!showStartButton &&
          grabWordsToPlay.map((word, i) => {
            return (
              <div style={styleListItem}>
                <ListItem button key={i}>
                  <ListItemText>{word}</ListItemText>
                </ListItem>
              </div>
            );
          })}
      </Grid>
    );
  }
}
