import React, { Component } from 'react';
import Question from './Question.jsx';

const propTypes = {
  questionType: React.PropTypes.string,
  onClick: React.PropTypes.func,
  name: React.PropTypes.string,
  value: React.PropTypes.string
}

class NewQuestionButton extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <button
          className="new-question-button"
          value={this.props.value}
          name={this.props.name}
          onClick={this.props.onClick}
          >{"Choose another " + this.props.name + " question" }
        </button>
      </div>
    );
  }
}

NewQuestionButton.propTypes = propTypes;

export default NewQuestionButton;
 /*

onClick={this.props.handleDarkQuestionClick}

!this.props.questionType == "" ? "Choose another " + this.props.name + " question" : "Choose a question type from above"

 */
