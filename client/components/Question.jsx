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
    const lightStyle = {
      backgroundColor: 'white',
      color: 'blue',
      width: '80%',
      margin: '2em auto',
      padding: '1em',
      fontSize: '3em'
    };
    const darkStyle = {
      backgroundColor: 'black',
      color: 'red',
      width: '80%',
      margin: '2em auto',
      padding: '1em',
      fontSize: '3em'

    };
    return (
      <div>
      {this.props.questionType === 'light' ?
          <div style={lightStyle}>
            <p>{this.props.currentQuestion}</p>
          </div>
        :
        <div style={darkStyle}>
            <p>{this.props.currentQuestion}</p>
        </div>}
    </div>
    );
  }
}

Question.propTypes = propTypes;

export default Question;

// TODO: look into how to pass props into an id for a jsx element
