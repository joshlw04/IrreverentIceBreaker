import React, { Component } from 'react';
import request from 'superagent';
import QuestionList from './CMS/questionList.jsx';
import CMSQuestion from './CMS/cmsQuestion.jsx';


class CMS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions:[],
    };
  }
  componentDidMount() {
    this.getQuestions();

  }

  getQuestions() {
    request.get('/api/questions')
           .then((response) => {
              let questionData = response.body;
              let questions = [];
              if(questionData) {
                questions = Object.keys(questionData).map((id) => {
                  const indvQuestionData = questionData[id];
                  return {
                    id,
                    question: indvQuestionData.question,
                    type: indvQuestionData.type,
                  };
                });
              }
              this.setState({ questions });
           });
  }

  check() {
    // setTimeout(function() {
    const check = this.state.questions.map((individualQuestion) => {
      return (
        individualQuestion.question
      );
    });
    console.log(check);
  //   }, 1000);
  }

  render() {
    this.check();
    return (
      <div>
        test
        <QuestionList questions={this.state.questions} />
        <CMSQuestion />
      </div>
    );
  }
}

export default CMS;
