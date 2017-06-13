import React, { Component } from 'react';

import Snackbar from 'modules/Templates/components/Snackbar';

export default class Informer extends Snackbar {


  componentDidMount() {

    console.log('componentDidMount 2');
    // console.log('f1', Informer.prototype.componentDidMount);
    // console.log('f2', Snackbar.prototype.componentDidMount);

    Snackbar.prototype.componentDidMount.call(this);
  }

  componentWillReceiveProps(nextProps){

    Snackbar.prototype.componentWillReceiveProps.call(this, nextProps);

    var newState = {};

    if(this.state.open != true){
      if(
        nextProps.message != this.state.message
        && nextProps.message != ""
      ){
        newState.open = true;
      }
      else{
        newState.message = "";
      }
    }

    this.setState(newState);

    console.log('componentWillReceiveProps', nextProps, newState);

    return true;
  }

  // componentDidUpdate(prevProps, prevState){
  //
  //   console.log('componentDidUpdate', prevProps, prevState);
  //
  //   this.props.documentActions.InformerMessageShowed();
  //
  //   Snackbar.prototype.componentDidUpdate.call(this, prevProps, prevState);
  // }

  componentDidUpdate(prevProps, prevState) {

    // console.log('componentDidUpdate', prevState, this.state);
    
    Snackbar.prototype.componentDidUpdate.call(this, prevProps, prevState);

    if (prevState.open !== this.state.open) {
      if (this.state.open !== true) {

        this.setState({
          message: "",
        });

        this.props.documentActions.InformerMessageShowed();

      } else {;

      }
    }
  }
}


