import './App.css';
import Home from "./components/Home";
import Header from "./components/Header";
import React, { Component, Fragment } from "react";


class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Home />
      </Fragment>
    );
  }
}

export default App;