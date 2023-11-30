import React, { Component } from "react";
import logo from '../logo.svg';


class Header extends Component {
  render() {
    return (
      <div className="text-center">
         <img src={logo} 
            className="App-logo" 
            alt="logo" 
            width="300"
            style={{ marginTop: "20px" }}
        />
        <hr />
        <h5>
          <i>presents</i>
        </h5>
        <h1>App with React + Django</h1>
      </div>
    );
  }
}

export default Header;
