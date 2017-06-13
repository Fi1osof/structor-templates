/**
*
* MainLayout
*
*/

import React, { Component } from "react";

import PropTypes from "prop-types";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui/styles/theme';
import createPalette from 'material-ui/styles/palette';
import { createStyleSheet } from 'material-ui/styles';
// import {fade} from 'material-ui/styles/colorManipulator';
import {blueGrey, grey, amber} from 'material-ui/styles/colors';

import MainGrid from './MainGrid';

let classes;

var customStyles;

class MainLayout extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      exampleValue: ""
    };


    customStyles = createMuiTheme({
      userAgent: typeof window != "undefined" && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : props.userAgent || 'all',
      palette: createPalette({
        primary: blueGrey,
      }),
      colors: {
        warning: '#FFC107',
        danger: '#F44336',
        info: '#2196F3',
      },
    });

  }



  render() {
    const { exampleValue } = this.state; // eslint-disable-line
    const { exampleProp } = this.props; // eslint-disable-line
    return (
        <MuiThemeProvider theme={customStyles}>

          <MainGrid
          >
            {this.props.children}
          </MainGrid>

      </MuiThemeProvider>
    );
  }
}

MainLayout.propTypes = {
  exampleProp: PropTypes.string
};
MainLayout.defaultProps = {
  exampleProp: ""
};

export default MainLayout;
