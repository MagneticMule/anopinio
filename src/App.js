import React, {
  Component
} from 'react';
import IntroText from './Components/IntroText.js';
import InputForm from './Components/InputForm.js';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return <div className = "App" >
      <
      div className = "container" >
      <
      IntroText text = "<h1>What is the project about?</h1>
    This research study is part of my MA degree.It seeks to understand the challenges students experience in completing a substantial piece of coursework.One challenge is procrastination!There is a natural reluctance to discuss this openly.
    Nevertheless, I want to understand how seriously it affects us, what forms it takes, and how we deal with it.If you are able to comment on any or all of these things in the text box below– in terms of your own experience - it would be a great help to my project!
      What happens to things written below ?
      This page does not ask who you are, it can not track where you are, and on pressing“ submit”, it leaves no trace visible to others.Anything written is stored in a password - protected file available only to myself.It might then be quoted in my thesis, although I would avoid or anonymize any text that risked identifying individuals or institutions.
    Contact details
    for queries
    Researcher: Ali Yazdani ttxay16 @nottingham.ac.uk
    Supervisor: charles.crook @nottingham.ac.uk 0115 846 6453
    School of Education Research Ethics Coordinator: educationresearchethics @nottingham.ac.uk

    Pressing“ submit” below confirms you accept the above conditions.(At that point the text disappears and there is a short pause before confirmation.)
    " /> <
    InputForm / >
      <
      /div> <
      /div>;
  }
}

export default App;