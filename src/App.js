
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent1 from './MyComponent1';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: true
    };
  }
  toggle = () => {
    this.setState({isOn: !this.state.isOn})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to My first React</h2>
          <MyComponent1 name="" />
        </div>
        <p className="App-intro">
          
        </p>
        
      </div>
    );
  }
}

export default App;