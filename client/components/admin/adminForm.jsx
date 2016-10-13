import React from 'react';
const propTypes = {
  handleSubmit: React.PropTypes.func,
  buttonText: React.PropTypes.string,
};

class AdminForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.emojiBurst = this.emojiBurst.bind(this);
  }
  handleInputChange(e) {
    const target = e.target;
    const name = target.getAttribute('name');
    const value = target.value;
    const updated = {};
    updated[name] = value;
    this.setState(updated);
    this.emojiBurst(5, 'dark')
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state);
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
        <div className="adminForm">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="email"
              value={this.state.email}
              placeholder="email..."
              onChange={this.handleInputChange}
            />
            <input
              type="password"
              name="password"
              value={this.state.password}
              placeholder="password..."
              onChange={this.handleInputChange}
            />
            <input type="submit" value={this.props.buttonText} />
          </form>
        </div>
      </div>
    );
  }
}

AdminForm.propTypes = propTypes;

export default AdminForm;
