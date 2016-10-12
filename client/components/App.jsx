import React, { Component } from 'react';
import Button from './Button.jsx';
import Question from './Question.jsx';
import request from 'superagent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      questionType: '',
      question: '',
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e) {
    const questionState = e.target.value;
    this.setState({ questionType: e.target.value });
    this.getQuestion(questionState);
  }

  getQuestion(questionState) {
    // const questionDiv = document.querySelector('#question');
    // questionDiv.innerHTML = '';
    // console.log(questionDiv);
    request.get(`/api/questions/${questionState}`)
           .then((question) => {
             const displayQuestion = question.body.question;
             console.log(displayQuestion);
            //  questionDiv.innerHTML = displayQuestion;
             this.setState({ question: displayQuestion });

           });
  }

  render() {
    return (
      <div id="app-body">
        <Button
        name="Light"
        value="light"
        questionType={this.state.questionType}
        onButtonClick={this.handleButtonClick}
        />
        {this.state.questionType === 'light' ?
          <Question
          questionType={this.state.questionType}
          currentQuestion={this.state.question}
          /> : <div></div>}
        <Button
        name="Dark"
        value="dark"
        questionType={this.state.questionType}
        onButtonClick={this.handleButtonClick}
        />
        {this.state.questionType === 'dark' ?
          <Question
          questionType={this.state.questionType}
          currentQuestion={this.state.question}
          /> : <div></div>}
        {/* <Button
        to="/political"
        name="Political"
        value="political"
        questionType={this.state.questionType}
        onButtonClick={this.handleButtonClick}
        />*/}
        {/* <Button
        name="NSFW"
        value="nsfw"
        questionType={this.state.questionType}
        onButtonClick={this.handleButtonClick}
        />
        {this.state.questionType === 'nsfw' ?
          <Question
          questionType={this.state.questionType}
          currentQuestion={this.state.question}
          /> : <div></div>} */}
    </div>
    );
  }
}

export default App;
