import React, { Component } from 'react';
import request from 'superagent';

class UserGeneratedContent extends Component {
  constructor() {
    super();
    this.state = {
      question: '',
      type: 'pending',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.this.publishUGCQuestToDB = this.this.publishUGCQuestToDB.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const name = target.getAttribute('name');
    const value = target.value;
    // const updated = {};
    // updated[name] = value;
    this.setState({ question: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.publishUGCQuestToDB();
    this.setState({ question: '' });
  }

  publishUGCQuestToDB() {
    request.post('/api/questions')
           .send({
              question: this.state.question,
              type: this.state.type,
           })
           .then(() => {
              alert('Thanks for your question');
              console.log('question submitted');
           })
  }

  render() {
    return (
      <div>
        Hello from UGC page.
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="question"
            value={this.state.question}
            onChange={this.handleInputChange}
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


//handleinput change
//handle submit
//handle ugc to db pulsih
