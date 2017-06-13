'use strict';

import React from 'react';
import ReactDOM   from 'react-dom';

import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import { LayoutContainer, LayoutItem } from "modules/MUI";

import { LabelRadio, RadioGroup } from 'material-ui/Radio';
import Paper from 'material-ui/Paper';
import { FormLabel } from 'material-ui/Form';


// import DevTools from './devtools';

// import AppBar from './appbar/';

// import ProfileDialogsAuth from './dialogs/auth';
import {Informer} from 'modules/Templates';

// import DevTools from './devtools';

// import View from './view';

import * as proxyActions from 'modules/Redux/actions/proxyActions';
import * as userActions from 'modules/Redux/actions/userActions';
import * as documentActions from 'modules/Redux/actions/documentActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import './styles/styles.less';

// import Drawer from './drawer/';

// import Menu from './menu/';

// import Map from './map/';

const propTypes = {
};

const defaultProps = {
  dockerOpened: false,
  // mobile: false,
};

class MainGrid extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      direction: 'row',
      justify: 'center',
      align: 'center',
      gutter: '16',
      open: props.open,
      // mobile: props.mobile,
      dockerOpened: props.dockerOpened,
    };
  }

  handleChange = (key) => (event, value) => {
    this.setState({
      [key]: value,
    });
  }


  componentWillMount(){

    if(typeof window == "undefined"){
      // For render css on server-side
      this.props.exports.theme = this.context.styleManager;

    //  map._onResize()
    }
  }


  render() {


    var mobile = this.context.styleManager.theme.breakpoints.down('md');
    var desktop = this.context.styleManager.theme.breakpoints.up('md');


    const styleSheet = createStyleSheet('InteractiveLayout', () => {


      var css = {
        root: {
          flexGrow: 1,
          height: '100%',
        },
        demo: {
          height: 240,
        },
        paper: {
          flexGrow: 1,

          '& .global__window-map-and-cart': {

            flexGrow: 1,

            '& .map': {

              flexGrow: 1,
            },
          },
        },
        control: {
          padding: 12,
        },
        docker: {
          // transition: 'display 0.5s, max-width 0.5s',
          // transition: 'max-width 0.5s',
          height: '100%',
          boxShadow: '2px 2px 11px 0px #cdc9d2',
          zIndex: 1,
          // '&.closed': {
          //   maxWidth: '0',
          // },

          '.menu-closed &': {
            // display: "none",
            maxWidth: '0',
          },

          '& .menu': {

            '& .menu--menu-bottom-border': {
              display: 'none',
            },
          },
        },
        mainBlock: {
          // transition: 'max-width 0.5s, flex-basis 0.5s',
          '&.wildscreen': {
            maxWidth: '100%',
            flexBasis: '100%',
          }
        },
        mapRoot: {
          height: '100%',
          // border: '1px solid red',
          // flexGrow: 1
        },
      };

      css.root[mobile] = {
        display: 'block',
      };

      css.docker[mobile] = {
        display: 'none',
      };

      css.mainBlock[mobile] = {
        '& .menu': {
          '.menu-closed &': {
            display: 'none',
          },
          '& .menu-toggler': {
            display: 'none',
          },
        },
      };

      css.mainBlock[desktop] = {
        '& .menu': {
          display: 'none',
        },
        '& .appbar--menu-toggler': {
          '.menu-opened &': {
            display: 'none',
          },
        },
      };

      // console.log('css', css);

      return css;
    });


    const classes = this.context.styleManager.render(styleSheet);

    const {
      align,
      direction,
      justify,
    } = this.state;

    var dockerOpened = this.state.dockerOpened === true

    let containerStyle = {
      padding: 20,
      background: '#EFEFEF',
    };


    return <LayoutContainer gutter={0} id="main-layout">
      <LayoutItem xs={12}>

          {this.props.children} 

      </LayoutItem>

      <Informer
        message={this.props.informerMessage}
        documentActions={this.props.documentActions}
      />  

    </LayoutContainer>;
  }
}


MainGrid.propTypes = propTypes;
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

  console.log('state', state);

  var currentState = {};

  Object.assign(currentState, state.document);

  currentState.user = state.user;
  currentState.document = state.document;

  return currentState;
}

export default connect(mapStateToProps, mapDispatchToProps)(MainGrid);
