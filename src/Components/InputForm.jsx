import React, { Component } from "react";

import Loading from "./Loading.jsx";

class InputForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.setState(() => {
      return { saving: false };
    });
  }

  handleSubmit(event) {
    this.setState(() => {
      return { saving: true };
    });
    event.preventDefault();
  }

  render() {
    const saving = this.state.saving;
    if (saving) {
      return <Loading />;
    } else {
      return (
        <div className="form fade-in">
          <form onSubmit={this.handleSubmit}>
            <textarea
              rows="20"
              cols="120"
              id="comment-box"
              name="comment"
              placeholder="Type away. Remember, we won't collect any personal data, only what you write here."
            />
            <input
              id="submit-btn"
              class="btn"
              type="submit"
              name="submit"
              value="Save"
            />
          </form>
        </div>
      );
    }
  }
}

export default InputForm;
