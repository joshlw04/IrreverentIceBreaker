import React, { Component } from 'react';

const propTypes = {
  currentQuestion: React.PropTypes.string,
}
class Question extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="question-body">
        <p>{this.props.currentQuestion}</p>
      </div>
    );
  }
}

Question.propTypes = propTypes;

export default Question;
