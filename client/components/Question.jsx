import React from 'react';

const propTypes = {
  getQuestion: React.PropTypes.func,
}

const Question = () => {
  return (
    <div id="question-body">
      <p>{this.props.getQuestion}</p>
    </div>
  );
}

Question.proptypes = propTypes;

export default Question;
