import React, { Component } from "react";

class Loading extends Component {
  constructor() {
    super();
  }

  render() {
    return <div className="loading fade-in">Saving...</div>;
  }
}

export default Loading;
