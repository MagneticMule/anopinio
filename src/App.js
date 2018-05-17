import React, { Component } from 'react';
import IntroText from './Components/IntroText.js';
import InputForm from './Components/InputForm.js';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return <div className="App">
    <div className="container"> 
        <IntroText text="Thank you for offering to contribute to this exploration of student help-seeking in assignments. You can write anything
        below and be sure that we have no way of tracking you or your input technology. But what you can contribute may helps both
        academics and other students have a better understanding of the tensions, challenges and temptations surrounding getting
        help with an assignment.
        Please feel able to share any experiences you have had (or observed) around getting such help (this
        may range from informal advice to purchasing assignments)." />
        <InputForm />
        </div>
      </div>;
  }
}

export default App;
