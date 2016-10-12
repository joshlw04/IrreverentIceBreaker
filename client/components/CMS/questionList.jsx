import React, { Component } from 'react';
import CMSQuestion from './cmsQuestion.jsx';

const propTypes = {
  handleDelete: React.PropTypes.func,
  handlePublish: React.PropTypes.func,
  questions: React.PropTypes.array,
};

// handleDelete={this.httpDeleteQuestion} handlePublish={this.handlePublish} questions={this.state.questions}

class QuestionList extends Component {
  render() {
    const questionElements = this.props.questions.map((individualQuestion, idx) => {
      return (
        <li key={idx}>
        {/* {individualQuestion.question} */}
        {/* {individualQuestion.type} */}
          <CMSQuestion
            handleDelete={this.props.handleDelete}
            handlePublish={this.props.handlePublish}
            type={individualQuestion.type}
            question={individualQuestion.question}
            id={individualQuestion.id}
           />
        </li>
      );
    });
    return (
      <ul>
        {questionElements}
      </ul>
    );
  }
}

QuestionList.propTypes = propTypes;

export default QuestionList;
