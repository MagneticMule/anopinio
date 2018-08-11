import React, { Component } from "react";
import IntroText from "./Components/IntroText.jsx";
import InputForm from "./Components/InputForm.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = { ShowIntro: true };
  }

  handleConfirm() {
    this.setState(() => {
      return { ShowIntro: false };
    });
  }

  render() {
    const showIntro = this.state.ShowIntro;
    if (showIntro) {
      return (
        <div className="App">
          <div className="top-color-div" />
          <div className="container">
            <IntroText
              handleConfirm={this.handleConfirm.bind(this)}
              text={
                <div>
                  <h1>What is this research about?</h1>
                  <p>
                    This study is part of the research I am doing at{" "}
                    <strong>The University of Nottingham</strong>. It seeks to
                    understand the challenges students experience in completing
                    a substantial piece of coursework. One challenge is
                    procrastination! There is a natural reluctance to discuss
                    this openly. Nevertheless, I want to understand how
                    seriously it affects us, what forms it takes, and how we
                    deal with it. If you are able to comment on any or all of
                    these things in terms of your own experience - it would be a
                    great help to my project!
                    <h2>What happens to the text I write here?</h2>
                    This page does not ask who you are, it can not track where
                    you are, and on pressing <b>Submit</b>, it leaves no trace
                    visible to others.
                    <strong>
                      {" "}
                      Anything written is stored in a password - protected file
                      available only to myself.
                    </strong>
                    It might then be quoted in my thesis, although I would avoid
                    or anonymize any text that risked identifying individuals or
                    institutions.
                  </p>
                  <h2>Contact details</h2>
                  <ul>
                    <li>
                      <strong>Researcher:</strong> Ali Yazdani{" "}
                      <a href="mailto:ttxay16@nottingham.ac.uk">
                        ttxay16@nottingham.ac.uk
                      </a>
                    </li>
                    <li>
                      <strong>Supervisor:</strong> Charles Crook{" "}
                      <a href="mailto:charles.crook@nottingham.ac.uk">
                        charles.crook@nottingham.ac.uk
                      </a>{" "}
                      tel:0115 846 6453
                    </li>
                    <li>
                      <strong>School of Education:</strong> Research Ethics
                      Coordinator{" "}
                      <a href="mailto:educationresearchethics@nottingham.ac.uk">
                        educationresearchethics@nottingham.ac.uk
                      </a>
                    </li>
                  </ul>
                  <br />
                  <strong>
                    Pressing “OK” below will take you to the text input system
                    and confirms you accept the above conditions.
                  </strong>
                </div>
              }
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <div className="container">
            <InputForm />
          </div>
        </div>
      );
    }
  }
}

export default App;
