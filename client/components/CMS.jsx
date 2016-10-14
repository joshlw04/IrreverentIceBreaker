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
    this.handlePublish = this.handlePublish.bind(this);
    this.httpUpdateQuestion = this.httpUpdateQuestion.bind(this);
    this.httpPublishQuestion = this.httpPublishQuestion.bind(this);
    this.httpDeleteQuestion = this.httpDeleteQuestion.bind(this);
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
                    // id,
                    id: indvQuestionData.id,
                    question: indvQuestionData.question,
                    type: indvQuestionData.type,
                  };
                });
              }
              this.setState({ questions });
           });
  }

  handlePublish({ id, type, question }) {
    if (id) {
      this.httpUpdateQuestion({ id, type, question });
    } else {
      this.httpPublishQuestion({ type, question });
    }
  }
  httpDeleteQuestion(id) {
    // const url = `https://meerkats-e16d1.firebaseio.com/posts/${id}.json`;
    // request.del(url)
    // request.del(url)
    request.del(`/api/questions/${id}`)
           .then(() => {
             this.getQuestions();
           });
  }
  httpUpdateQuestion({ id, type, question }) {
    // const url = `https://meerkats-e16d1.firebaseio.com/posts/${id}.json`;
    // request.patch(url)
    request.put(`/api/questions/${id}`)
           .send({ type, question })
           .then(() => {
             this.getQuestions();
           });
  }
  httpPublishQuestion({ type, question }) {
    // const url = 'https://meerkats-e16d1.firebaseio.com/posts.json';
    // request.post(url)
    request.post('/api/questions')
           .send({ type, question })
           .then(() => {
             this.getQuestions();
           });
  }

  render() {
    return (
      <div>
        <QuestionList handleDelete={this.httpDeleteQuestion} handlePublish={this.handlePublish} questions={this.state.questions} />
        <CMSQuestion handleDelete={this.httpDeleteQuestion} handlePublish={this.handlePublish} />
      </div>
    );
  }
}

export default CMS;
