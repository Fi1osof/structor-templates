import './styles/styles.less';

import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Snackbar from '../Snackbar';

export default class Informer extends Component {


  componentDidMount() {

    // console.log('componentDidMount 2');
    // console.log('f1', Informer.prototype.componentDidMount);
    // console.log('f2', Snackbar.prototype.componentDidMount);

    // Snackbar.prototype.componentDidMount.call(this);

    let {store} = this.props;

    store.getDispatcher().register(payload => {

      this.forceUpdate();
    });
  }

  componentWillReceiveProps(nextProps){

    // Snackbar.prototype.componentWillReceiveProps.call(this, nextProps);

    // var newState = {};

    // if(this.state.open != true){
    //   if(
    //     nextProps.message != this.state.message
    //     && nextProps.message != ""
    //   ){
    //     newState.open = true;
    //   }
    //   else{
    //     newState.message = "";
    //   }
    // }

    // this.setState(newState);

    // console.log('componentWillReceiveProps', nextProps, newState);

    return true;
  }

  // componentDidUpdate(prevProps, prevState){
  
  //   // console.log('componentDidUpdate', prevProps, prevState);
  
  //   // this.props.documentActions.InformerMessageShowed();
  
  //   // Snackbar.prototype.componentDidUpdate.call(this, prevProps, prevState);

  // }

  componentDidUpdate(prevProps, prevState) {

    // Snackbar.prototype.componentDidUpdate.call(this, prevProps, prevState);

    // if(this.props.autoHideDuration && this.props.message && this.props.message != "" && prevProps.message != this.props.message){
    //   setTimeout(() => {
    //     this.props.InformerMessageShowed()
    //   }, this.props.autoHideDuration);
    // }

    // if (prevState.open !== this.state.open) {
    //   if (this.state.open !== true) {

    //     this.setState({
    //       message: "",
    //     });

    //     // alert('InformerMessageShowed');
    //     // this.props.InformerMessageShowed();

    //   } else {;

    //   }
    // }
  }

  render(){

    let {store} = this.props;

    if(!store){
      return null;
    }

    let notifications = [];

    store.getState().map(item => notifications.push(<Snackbar 
      open={true}
      key={notifications.length}
      {...item}
    />));

    return <div
      className="StructorTemplates-Informer"
    >
      {notifications}
    </div>
  }
}

Informer.propTypes = {
  store: PropTypes.object.isRequired,
}

Informer.defaultProps = {
  // autoHideDuration: 3000,
}


