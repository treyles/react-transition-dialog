# react-transition-dialog

<img src="https://i.imgur.com/1aXEK1a.gif" width="300px"/>

Tiny React component for dialog transitions with click-outside functionality. Uses React _CSSTransition_ (React-transition-group).

## Installation

Install with [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

    $ npm install react-transition-dialog
    $ yarn add react-transition-dialog

## Usage

`timeout`, `classNames`, `onEntered`, `onExited` and CSS selectors are handled by _CSSTransition_ . See [documentation](https://reactcommunity.org/react-transition-group/css-transition) for more information.

### Component:

```jsx
<TransitionDialog
  // required props
  elementIsOpen={true}
  toggleDialog={this.method}
  timeout={200}
  classNames="message"
  // optional props
  onEntered={this.method}
  onExited={this.method}
>
  // dialog element
</TransitionDialog>
```

### CSS:

```css
.message-enter {
  ...;
}
.message-enter-active {
  ...;
}
.message-exit {
  ...;
}
.message-exit-active {
  ...;
}
```

## Example

```jsx
import React, { Component } from 'react';
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
      <div className="app">
        <button onClick={this.toggleDialog}>click</button>
        <TransitionDialog
          dialogIsOpen={isClicked}
          toggleDialog={this.toggleDialog}
          timeout={200}
          classNames="message"
        >
          {dialog}
        </TransitionDialog>
      </div>
    );
  }
}

export default App;
```

```css
.message-enter {
  opacity: 0.01;
}

.message-enter-active {
  opacity: 1;
  transition: all 200ms ease-out;
}

.message-exit {
  opacity: 1;
}

.message-exit-active {
  opacity: 0.01;
  transition: all 200ms ease-out;
}
```
