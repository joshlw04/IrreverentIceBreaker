import React, { Component } from 'react';

const propTypes = {
  questionType: React.PropTypes.string,
  onButtonClick: React.PropTypes.func,
  name: React.PropTypes.string,
  value: React.PropTypes.string
  // handleLightQuestionClick: React.PropTypes.func
}
class Button extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <button
        className="button"
        value={this.props.value} // assigning HTML button properties thru props. it works! haha
        onClick={this.props.onButtonClick}>{this.props.name}</button>
      </div>
    );
  }
}

Button.propTypes = propTypes;

export default Button;
 /*

onClick={this.props.handleDarkQuestionClick}


 */
