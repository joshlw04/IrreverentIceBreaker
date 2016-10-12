import React, { Component } from 'react';

const propTypes = {
  questionType: React.PropTypes.string,
  onTypeButtonClick: React.PropTypes.func,
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
      <div className="button">
        <button
        value={this.props.value} // assigning HTML button properties thru props. it works! haha
        name={this.props.name}
        onClick={this.props.onTypeButtonClick}>{this.props.name + " mode"}</button>
      </div>
    );
  }
}

Button.propTypes = propTypes;

export default Button;
 /*

onClick={this.props.handleDarkQuestionClick}


 */
