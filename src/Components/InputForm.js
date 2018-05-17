import React, { Component } from "react";

class InputForm extends Component {
  constructor() {
    super();
  }

  render() {
    return <div className="form">
        <form action="anopinio.php" method="post" name="comment-form">
          <textarea rows="20" cols="120" id="comment-box" name="comment" placeholder="Type away. Remember, we won't collect any data about you, just what you write here." />
          <input id="submit-btn" class="btn" type="submit" name="submit" value="Send" />
        </form>
      </div>;
  }
}

export default InputForm;
