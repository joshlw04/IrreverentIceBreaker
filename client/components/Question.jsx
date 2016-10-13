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
      <div>
      {this.props.questionType === 'light' ?
        <div>
            <div className='lightQuestionDiv'>
              {this.props.currentQuestion}
            </div>
            <div className='lightQuestionDivBackground'></div>
        </div>
        :
        <div>
          <div className='darkQuestionDiv'>
              {this.props.currentQuestion}
          </div>
          <div className='darkQuestionDivBackground'></div>
        </div>
        }
    </div>
    );
  }
}

Question.propTypes = propTypes;

export default Question;

// TODO: look into how to pass props into an id for a jsx element
