import React, { Component } from 'react';

const propTypes = {
  currentQuestion: React.PropTypes.string,
  questionType: React.PropTypes.string,

}
class Question extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="question-{this.props.questionType}">
        <p>{this.props.currentQuestion}</p>
      </div>
    );
  }
}

Question.propTypes = propTypes;

export default Question;

// TODO: look into how to pass props into an id for a jsx element

