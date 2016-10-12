import React, { Component } from 'react';
import TypeButton from './TypeButton.jsx';
import Question from './Question.jsx';
import NewQuestionButton from './NewQuestionButton.jsx';
import request from 'superagent';
console.log('from app');

class App extends Component {
  constructor() {
    super();
    this.state = {
      questionType: '',
      question: '',
    }
    this.handleTypeButtonClick = this.handleTypeButtonClick.bind(this);
    this.handleNewQuestionClick = this.handleNewQuestionClick.bind(this);

  }

  handleTypeButtonClick(e) {
    const questionState = e.target.value;
    this.setState({ questionType: e.target.value });
    this.getQuestion(questionState);
  }

  handleNewQuestionClick () {
    const questionState = this.state.questionType;
    // console.log(questionState);
    request.get(`/api/questions/${questionState}`)
           .then((question) => {
             const displayQuestion = question.body.question;
            //  console.log(question.body.question);
             this.setState({ question: displayQuestion });
    //          return <Question currentQuestion={this.state.question} />;
             });
  }

  getQuestion(questionState) {
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
      {this.state.questionType === '' ?
        <TypeButton
        name="Light"
        value="light"
        questionType={this.state.questionType}
        onTypeButtonClick={this.handleTypeButtonClick}
        />
        <TypeButton
        name="Dark"
        value="dark"
        questionType={this.state.questionType}
        onTypeButtonClick={this.handleTypeButtonClick}
        />
        <p>
          Choose a question type from above!
        </p>
        : <div></div> }
        {this.state.questionType === 'dark' ?
          <Question
          questionType={this.state.questionType}
          currentQuestion={this.state.question}
          /> : <div></div>}
        {this.state.questionType === 'light' ?
          <Question
          questionType={this.state.questionType}
          currentQuestion={this.state.question}
          /> : <div></div>}

      {this.state.questionType === '' ? <div></div> :
        <NewQuestionButton
        name={this.state.questionType}
        onClick={this.handleNewQuestionClick}
        />
      }
    </div>
    );
  }
}

export default App;

/*

{/* <Button
to="/political"
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
{this.state.questionType === 'nsfw' ?
  <Question
  questionType={this.state.questionType}
  currentQuestion={this.state.question}
  /> : <div></div>}

*/
