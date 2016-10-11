import React, { Component } from 'react';
import Button from './Button.jsx';
import Question from './Question.jsx';
import request from 'superagent';

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
    this.getQuestion(questionState);
  }

  // getQuestion(questionState) {
  //   request.get(`/api/questions/:${questionState}`
//            .then(question) => {
//              console.log(question);
//             });
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
              {this.state.questionType === 'light' ?
                <Question
                  questionType={this.state.questionType}
                /> : <div></div>}
              <Button
              name="Dark"
              value="dark"
              questionType={this.state.questionType}
              onButtonClick={this.handleButtonClick}
              />
            {/* <li>
              <Button
              to="/political"
              name="Political"
              value="political"
              questionType={this.state.questionType}
              onButtonClick={this.handleButtonClick}
              />
            </li>
            <li>
              <Button
              name="NSFW"
              value="nsfw"
              questionType={this.state.questionType}
              onButtonClick={this.handleButtonClick}
              />
            </li> */}
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
