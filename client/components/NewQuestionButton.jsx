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
      // let buttonName = "";
      // if (this.props.questionType == "") {
      //   // buttonName = "Choose a Question Type from Above"
      //   console.log(this.props.questionType);
      // } else {
      //   buttonName = `Choose another ${this.props.name} question`;
      // }
    return (
      <div className="button">
        <button
        value={this.props.value}
        name={this.props.name}
        onClick={this.props.onClick}
        >{"Choose another " + this.props.name + " question" }</button>
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
