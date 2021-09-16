import React, { Component } from "react";

export default class Loading extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          className="text-center"
          src="./loading-buffering.gif"
          alt="loading gif"
        />
      </div>
    );
  }
}
