import React, { Component } from 'react';
import { Link } from 'react-router'
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
    this.emojiBurst = this.emojiBurst.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const name = target.getAttribute('name');
    const value = target.value;
    this.setState({ question: value });
    this.emojiBurst(1,'light')
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
              alert('Thanks!');
              console.log('question submitted');
           })
  }

  emojiBurst(numHearts, currentState){
    let $emojis;
    const $body = $('body');
    let emojiArray = [];

      if (currentState == 'light') {
        emojiArray.push('😇','😄','☕','🍔','⚽','🐻','🍕','🍦','💅','🍔','⚽','🐻',)
      }
      else if (currentState == 'dark') {
        emojiArray.push('👄','🍆','🔫','💰','💶','💀','👻','😲','🍺','🍻','🍷','😛','😈','🙊','🙉','🙈')
      }

      for (let i = 0; i < numHearts; i++) {
      let randomEmoji = emojiArray[Math.floor(Math.random() * emojiArray.length) + 0  ]
      $emojis = $('<h1>').addClass('emojis').html(randomEmoji);
      $body.append($emojis);
      $emojis.animate({
        top: Math.floor(Math.random() * 200) - 50 + '%',
        left: Math.floor(Math.random() * 200) - 50 + '%',
        opacity: 0,
      }, 1500, 'linear');
    }
  }

  render() {
    return (
      <div>
        <p className="UGCGreeting">Hello from SSS™</p>
        <p className="UGCGreetingSub">Please write a suggested question.</p>
        <p className="UGCGreetingSub">If we like it, we'll post it.👋</p>
        <div className="UGCSubmitForm">
          <form onSubmit={this.handleSubmit}>
            <input className="UGCForm"
              type="text"
              name="question"
              value={this.state.question}
              onChange={this.handleInputChange}
              placeholder="Add your own question..."
            />
            <br/>
            <input className="UGCFormButton"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
        <div className='UGCButtonContainer'>
          <button>
          <Link to="/">
            Back to Home!
          </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default UserGeneratedContent;
