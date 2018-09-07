import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

class TransitionDialog extends Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { dialogIsOpen } = this.props;

    if (prevProps.dialogIsOpen !== dialogIsOpen) {
      if (dialogIsOpen) {
        document.addEventListener('click', this.handleClickOutside);
      } else {
        document.removeEventListener('click', this.handleClickOutside);
      }
    }
  }

  setWrapperRef(element) {
    this.wrapperRef = element;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.toggleDialog();
    }
  }

  render() {
    const {
      dialogIsOpen,
      children,
      timeout,
      classNames,
      onEntered,
      onExited
    } = this.props;

    return (
      <div ref={this.setWrapperRef}>
        <CSSTransition
          in={dialogIsOpen}
          timeout={timeout}
          classNames={classNames}
          onEntered={onEntered || undefined}
          onExited={onExited || undefined}
          unmountOnExit
        >
          {children}
        </CSSTransition>
      </div>
    );
  }
}

TransitionDialog.propTypes = {
  toggleDialog: PropTypes.func.isRequired,
  dialogIsOpen: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  timeout: PropTypes.number.isRequired,
  classNames: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onEntered: PropTypes.func,
  onExited: PropTypes.func
};

export default TransitionDialog;
