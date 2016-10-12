import React, { Component } from 'react';
import Light from './Light.jsx';
import Dark from './Dark.jsx';
import Toggle from './Toggle.jsx';

const propTypes = {
  questionType: React.PropTypes.string,
  handleDarkQuestionClick: React.PropTypes.func,
  handleLightQuestionClick: React.PropTypes.func
}

class Title extends Component {
  constructor() {
    super();
  }

  render() {
    <div>
      {if (this.props.questionType = '') {
        <h1>This is the home page</h1>
        <p>something here to give instructions</p>
      } else if (this.props.questionType = 'light') {

      }
    }
    </div>
  }

}

Title.propTypes = propTypes;

export default Title;

/*

onClick={this.props.handleLightQuestionClick}
onClick={this.props.handleDarkQuestionClick}

*/
