import React, { Component } from "react";

export default class Loading extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          style={{ width: "50px" }}
          className="text-center my-4"
          src="./loading-buffering.gif"
          alt="loading gif"
        />
      </div>
    );
  }
}
