import React, { Component } from "react";

class IntroText extends Component {
  constructor() {
    super();
  }
  render() {
    return <div>
        <div className="intro-text">{this.props.text}</div>
        <input id="submit-btn" class="btn" type="submit" name="submit" value="OK" />
      </div>;
  }
}

export default IntroText;
