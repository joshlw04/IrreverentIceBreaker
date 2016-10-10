import React, { Component } from 'react';
import Button from './Button.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      questionType: '',
        // keywords: light, dark, sexy, political, etc
    }
    // this.handleDarkQuestionClick = this.handleDarkQuestionClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e) {
    const questionState = e.target.value;
    this.setState({ questionType: e.target.value });
    console.log(questionState);
  }
  //
  // handleDarkButtonClick() {
  //   console.log("Button clicked");
  //   return this.setState({ questionType: 'light' });
  //   console.log(this.state.questionType);
  // }



  render() {
    return (
      <div id="app-body">
          <div>
            <Button
            name="Light"
            value="light"
            questionType={this.state.questionType}
            onButtonClick={this.handleButtonClick}
            />
            <Button
            name="Dark"
            value="dark"
            questionType={this.state.questionType}
            onButtonClick={this.handleButtonClick}
            />
            <Button
            name="Political"
            value="political"
            questionType={this.state.questionType}
            onButtonClick={this.handleButtonClick}
            />
            <Button
            name="NSFW"
            value="nsfw"
            questionType={this.state.questionType}
            onButtonClick={this.handleButtonClick}
            />

        </div>
    </div>
    );
  }
}

export default App;

/*

Methods to add:

getLightQuestion() {
  request.get(`api/questions/light`)
         .then((questionResponse) => {

       })

})
}


*/
