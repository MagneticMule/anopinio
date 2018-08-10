import React, { Component } from "react";

class IntroText extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="fade-in">
        <div className="intro-text">
          <h1>{this.props.header}</h1>
          <p>{this.props.text}</p>
        </div>
        <form>
          <button
            onClick={this.props.handleConfirm}
            id="submit-btn"
            className="btn"
            type="submit"
            name="submit"
            value="OK"
          >
            OK
          </button>
        </form>
      </div>
    );
  }
}

export default IntroText;
