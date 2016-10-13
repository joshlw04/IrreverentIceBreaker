import React, { Component } from 'react';
import request from 'superagent';

class UserGeneratedContent extends Component {
  constructor() {
    super();
    this.state = {
      question: '',
      type: 'pending',
    };
  }

  render() {
    return (
      <div>
        Hello from UGC page.
        <form>
          <input
            type="text"
            name="question"
            // value={ this.state.question }
            placeholder="Add your own question..."
          />
          <input
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

export default UserGeneratedContent;
