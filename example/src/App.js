import React, { Component } from 'react';
import './App.css';
import TransitionDialog from 'react-transition-dialog';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };

    this.toggleDialog = this.toggleDialog.bind(this);
  }

  toggleDialog() {
    this.setState({
      isClicked: !this.state.isClicked
    });
  }

  render() {
    const { isClicked } = this.state;
    const dialog = <div className="dialog" />;

    return (
      <div className="App">
        <button onClick={this.toggleDialog}>
          {isClicked ? 'close' : 'open'}
        </button>
        <TransitionDialog
          dialogIsOpen={isClicked}
          toggleDialog={this.toggleDialog}
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
