import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./components/ui/navBar";

import NewGame from "./pages/newGame";
import Home from "./pages/home";

import { Box } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Box paddingTop={2}>
          <Switch>
            <Route path="/new" component={NewGame} />
            <Route path="/" exact component={Home} />
            {/* Pass props to route/component */}
            {/* <Route path="/" render={() => <COMPONENT prop={foo} />} /> */}
          </Switch>
        </Box>
      </React.Fragment>
    );
  }
}
export default App;
