import React, { Component } from 'react';
import { Link } from 'react-router'
import request from 'superagent';

import TypeButton from './TypeButton.jsx';
import Question from './Question.jsx';
import NewQuestionButton from './NewQuestionButton.jsx';
import UserGeneratedContent from './UserGeneratedContent.jsx';

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
    this.emojiBurst(30, questionState);
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
   this.emojiBurst(30, questionState);
  }

  getQuestion(questionState) {
    request.get(`/api/questions/${questionState}`)
           .then((question) => {
             const displayQuestion = question.body.question;
            //  questionDiv.innerHTML = displayQuestion;
             this.setState({ question: displayQuestion });
           });
  }

  emojiBurst(numHearts, currentState){
    let $emojis;
    const $body = $('body');
    let emojiArray = [];

      if (currentState == 'light') {
        emojiArray.push('😇','😄','☕',)
        console.log('light array');
        console.log(emojiArray)
      }
      else if (currentState == 'dark') {
        emojiArray.push('☕')
        console.log('dark array');
        console.log(emojiArray)
      }

      for (let i = 0; i < numHearts; i++) {
      let randomEmoji = emojiArray[Math.floor(Math.random() * emojiArray.length) + 0  ]
      $emojis = $('<h1>').addClass('heart').html(randomEmoji);
      $body.append($emojis);
      $emojis.animate({
        top: Math.floor(Math.random() * 200) - 50 + '%',
        left: Math.floor(Math.random() * 200) - 50 + '%',
        opacity: 0,
      }, 1500, 'linear');
    }
  }

  render() {
    return (
      <div>
        <div>
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
        </div>
        <div>
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
      <button>
      <Link to="/ugc">
      Create your own question!
      </Link>
      </button>
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
