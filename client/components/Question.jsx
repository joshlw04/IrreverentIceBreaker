import React from 'react';

const propTypes = {
  getQuestion: React.PropTypes.func,
}
  // console.log(this.props),

const Question = () => {
  return (
    <div id="question-body">
      <p></p>
      {/* <p>{this.props.getQuestion}</p> */}
    </div>
  );
}

Question.proptypes = propTypes;

export default Question;
