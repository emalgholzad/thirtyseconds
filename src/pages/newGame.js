import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";

import Countdown from "./../components/ui/countdown";
import { getWords } from "./../services/Words";

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

    //   this.countdown = setInterval(() => {
    //     const seconds = this.state.seconds;

    //     if (seconds > 0) {
    //       this.setState(({ seconds }) => ({
    //         seconds: seconds - 1
    //       }));
    //     }
    //   }, 1000);
  }

  shuffleArray = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  handleCountdown = () => {
    // Get all words
    // const allWords = await getWords();

    // Shuffle words
    const shuffledArray = this.shuffleArray(this.state.words);

    // Grab max words
    this.setState({
      grabWordsToPlay: shuffledArray.slice(0, this.state.maxWords)
    });

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
          grabWordsToPlay.map(word => {
            return <h2 key={word}>{word}</h2>;
          })}
      </Grid>
    );
  }
}
