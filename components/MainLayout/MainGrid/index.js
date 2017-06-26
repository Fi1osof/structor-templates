'use strict';

import React, {Component} from 'react';
import ReactDOM   from 'react-dom';
import PropTypes from 'prop-types';

import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import { LayoutContainer, LayoutItem } from "modules/MUI";

import { LabelRadio, RadioGroup } from 'material-ui/Radio';
import Paper from 'material-ui/Paper';
import { FormLabel } from 'material-ui/Form';

 

import * as proxyActions from 'modules/Redux/actions/proxyActions';
import * as userActions from 'modules/Redux/actions/userActions';
import * as documentActions from 'modules/Redux/actions/documentActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
 

const defaultProps = {
  dockerOpened: false,
};

class MainGrid extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dockerOpened: props.dockerOpened,
    };
  }

  handleChange = (key) => (event, value) => {
    this.setState({
      [key]: value,
    });
  }


  render() {  

    var dockerOpened = this.state.dockerOpened === true;

    return <LayoutContainer gutter={0} id="main-layout">
      <LayoutItem xs={12}>

          {this.props.children} 

      </LayoutItem>

    </LayoutContainer>;
  }
}


MainGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};
MainGrid.defaultProps = defaultProps;
MainGrid.contextTypes = { 
  styleManager: customPropTypes.muiRequired,
  store: React.PropTypes.object,
};

function mapDispatchToProps(dispatch) {
  return {
    proxyActions: bindActionCreators(proxyActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch),
    documentActions: bindActionCreators(documentActions, dispatch),
  }
}

function mapStateToProps(state) {

  // console.log('state', state);

  var currentState = {};

  Object.assign(currentState, state.document);

  currentState.user = state.user;
  currentState.document = state.document;

  return currentState;
}

export default connect(mapStateToProps, mapDispatchToProps)(MainGrid);
