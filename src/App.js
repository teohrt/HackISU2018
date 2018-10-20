import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { toggle: true };
  }
  toggleToggle = () => this.setState({ toggle: !this.state.toggle });
  render() {
    const { toggle } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Music Sharing Made Easy.
          </h1>
          <h2>
            Skeleton Code
          </h2>
        </header>
      </div>
    );
  }
}

export default App;
