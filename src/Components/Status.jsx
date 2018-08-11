import React, { Component } from "react";

class Status extends Component {
  constructor() {
    super();
  }

  render(props) {
    return (
      <div className="status fade-in">
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}

export default Status;
