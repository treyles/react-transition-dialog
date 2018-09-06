import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TransitionDialog from 'react-transition-dialog';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: !this.state.clicked
    });
  }

  closeDialog() {
    this.setState({
      clicked: false
    });
  }

  render() {
    const { clicked } = this.state;

    const dialog = (
      <div
        style={{
          position: 'absolute',
          left: '20px',
          top: '20px',
          width: '100px',
          height: '50px',
          background: 'dodgerBlue'
        }}
      >
        <button onClick={() => console.log('works')}>buttton</button>
      </div>
    );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.handleClick}>clicker</button>
        <TransitionDialog
          elementIsOpen={clicked}
          onRequestClose={this.closeDialog}
          timeout={600}
          classNames="message"
        >
          {dialog}
        </TransitionDialog>
      </div>
    );
  }
}

export default App;
