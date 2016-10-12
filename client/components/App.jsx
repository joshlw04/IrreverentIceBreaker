import React, { Component } from 'react';
import Button from './Button.jsx';
import Question from './Question.jsx';
import request from 'superagent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      questionType: '',
      // questionState: '',
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e) {
    const questionState = e.target.value;
    this.setState({ questionType: e.target.value });
    this.getQuestion(questionState);
  }

   getQuestion({questionType}) {
    request.get(`/api/questions/${questionType}`)
           .then((question) => {
             return question.body.question;
            });
            console.log(question.body.question)
  }


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
              {this.state.questionType === 'light' ?
                <Question
                getQuestion={this.getQuestion}
                /> : <div></div>}
              <Button
              name="Dark"
              value="dark"
              questionType={this.state.questionType}
              onButtonClick={this.handleButtonClick}
              />
        </div>
    </div>
    );
  }
}

export default App;
