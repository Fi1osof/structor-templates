import React, { Component } from 'react';

import './styles/styles.less';

const defaultProps = {
  open: false,
  message: "",
  action: "", // The label for the action on the snackbar.
  onActionTouchTap: null,   // Fired when the action button is touchtapped
  autoHideDuration: 3000,
}

export default class Snackbar extends Component {

  timerAutoHideId = null;

  constructor(props){

    super(props);

    var state = {
      open: props.open,
      message: props.message,
    };

    this.state = state;
  }


  componentWillReceiveProps(nextProps){

    var newState = {};

    for(var key in defaultProps){
      if(
        typeof nextProps[key] != "undefined"
        && nextProps[key] !== this.state[key]
      ){
        newState[key] = nextProps[key];
      }
    };

    console.log('componentWillReceiveProps', newState);

    this.setState(newState);

    return true;
  }

  componentDidMount() {

    console.log('componentDidMount 1');

    if (this.state.open) {
      this.setAutoHideTimer();
      this.setTransitionTimer();
    }
  }

  componentDidUpdate(prevProps, prevState) {

    console.log('componentDidUpdate', prevState, this.state);

    if (prevState.open !== this.state.open) {
      if (this.state.open) {
        this.setAutoHideTimer();
        this.setTransitionTimer();
      } else {
        clearTimeout(this.timerAutoHideId);
      }
    }
  }

  // Timer that controls delay before snackbar auto hides
  setAutoHideTimer() {

    console.log('setAutoHideTimer');

    const autoHideDuration = this.props.autoHideDuration;

    if (autoHideDuration > 0) {
      clearTimeout(this.timerAutoHideId);
      this.timerAutoHideId = setTimeout(() => {
        if (this.props.open !== null && this.props.onRequestClose) {
          this.props.onRequestClose('timeout');
        } else {
          this.setState({open: false});
        }
      }, autoHideDuration);
    }

    console.log('timerAutoHideId', this.timerAutoHideId);
  }

  // Timer that controls delay before click-away events are captured (based on when animation completes)
  setTransitionTimer() {
    this.timerTransitionId = setTimeout(() => {
      this.timerTransitionId = undefined;
    }, 400);
  }

  render(){

    var classes = ["mdc-snackbar"];

    if(this.state.open === true && this.state.message != ""){
      classes.push("mdc-snackbar--active");
    }

    return <div className={classes.join(" ")}
      aria-live="assertive"
      aria-atomic="true"
      aria-hidden="true"
    >
      <div className="mdc-snackbar__text">
        {this.state.message}
      </div>

      {this.state.action != "" && this.state.onActionTouchTap
        ?
          <div className="mdc-snackbar__action-wrapper">
            <button type="button" className="mdc-button mdc-button--accent mdc-snackbar__action-button">
              {this.state.action}
            </button>
          </div>
        :
        null
      }
    </div>;
  }
}

Snackbar.defaultProps = defaultProps;

