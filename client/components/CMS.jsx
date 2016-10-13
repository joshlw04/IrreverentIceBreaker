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
              console.log(questionData);
              let questions = [];
              if(questionData) {
                questions = Object.keys(questionData).map((id) => {
                  const indvQuestionData = questionData[id];
                  return {
                    // id,
                    id: indvQuestionData.id,
                    question: indvQuestionData.question,
                    type: indvQuestionData.type,
                    admin_email: indvQuestionData.admin_email,
                  };
                });
              }
              this.setState({ questions });
           });
  }

  handlePublish({ id, type, question, admin_email }) {
    if (id) {
      this.httpUpdateQuestion({ id, type, question, admin_email });
    } else {
      this.httpPublishQuestion({ type, question, admin_email });
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
  httpUpdateQuestion({ id, type, question, admin_email }) {
    // const url = `https://meerkats-e16d1.firebaseio.com/posts/${id}.json`;
    // request.patch(url)
    request.put(`/api/questions/${id}`)
           .send({ type, question, admin_email })
           .then(() => {
             this.getQuestions();
           });
  }
  httpPublishQuestion({ type, question, admin_email }) {
    // const url = 'https://meerkats-e16d1.firebaseio.com/posts.json';
    // request.post(url)
    request.post('/api/questions')
           .send({ type, question, admin_email })
           .then(() => {
             this.getQuestions();
           });
  }

  render() {
    return (
      <div>
        test
        <QuestionList handleDelete={this.httpDeleteQuestion} handlePublish={this.handlePublish} questions={this.state.questions} />
        <CMSQuestion handleDelete={this.httpDeleteQuestion} handlePublish={this.handlePublish} />
      </div>
    );
  }
}

export default CMS;
