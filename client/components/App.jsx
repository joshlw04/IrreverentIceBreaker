import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      questionType: '',
        // keywords: light, dark, sexy, political, etc
    }
  }
  render() {
    return (
      <div id="app-body">
        <p>this is from the app component</p>
      </div>
    );
  }
}

export default App;
