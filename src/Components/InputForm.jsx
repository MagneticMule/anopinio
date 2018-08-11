import React, { Component } from "react";
import Status from "./Status.jsx";

class InputForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.save = this.save.bind(this);
  }

  componentWillMount() {
    this.setState(() => {
      return { saving: false };
    });
    this.setState(() => {
      return { saved: false };
    });
  }

  save(data) {
    this.setState(() => {
      return { saving: true };
    });
    let formData = new FormData();
    formData.append("comment", data);
    console.log(data);
    console.log(formData);

    fetch("anopinio.php", {
      method: "POST",
      // headers: { "Content-type": "application/x-www-form-urlencoded" },
      body: formData
    }).then(response => {
      console.log(response.headers.get("Content-Type"));
      console.log(response.headers.get("Date"));
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.type);
      console.log(response.url);
      if (response.status == 200) {
        console.log("status is 200");
        this.setState({ saving: false });
        this.setState({ saved: true });
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.comment.value);
    this.save(event.target.comment.value);
  }

  render() {
    const saving = this.state.saving;
    const saved = this.state.saved;
    console.log("Saving" + saving);
    console.log("Saved " + saved);
    if (saving) {
      return <Status text="Saving..." />;
    } else if (!saving && saved) {
      return <Status text="Finished. Thank you for your help." />;
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
              className="btn"
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
