/**
*
* MainLayout
*
*/

import React, { Component } from "react";

import PropTypes from 'prop-types';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui/styles/theme';
import createPalette from 'material-ui/styles/palette';
import { createStyleSheet } from 'material-ui/styles';
import customPropTypes from 'material-ui/utils/customPropTypes';
import {blueGrey, grey, amber} from 'material-ui/styles/colors';

import MainGrid from './MainGrid';

import {Informer, Auth} from 'modules/Templates';

let classes;


const styleSheet = createStyleSheet('DatabaseTable', (theme) => {

  let DrawerPaper = {
 
  };

  DrawerPaper = {

    width: '60%',
    boxShadow: `0px 0px 14px 0px #ddd`,
    padding: 10,
  };

  DrawerPaper[theme.breakpoints.down('md')] = {
      
    width: '100%',
    color: 'red', 
  }


  let FullwidthDrawerPaper = {
    width: '100%',
  }


  return {
    root: {
      marginTop: 60,

      '& .success': {

        color: 'green',
      },
      '& .dirty': {

        color: theme.palette.accent[500],
      },
    },
    filters: {
      padding: 15,
    },
    menu: {
      position: 'absolute',
      zIndex: 1000,
      left: "50%",
      transform: "translate(-50%)",
      fontWeight: "normal",
      marginTop: 10,
    },
    paper: {
      width: '100%',
      overflowX: 'auto',

      '& .img': {
        maxWidth: 100,
        maxHeight: 60,
      },
    },
    table: {
      '& td': {

        whiteSpace: 'normal',
      },
    },
    Drawer: {
    },
    DrawerPaper: {
    },
    ItemDrawer: {},
    ItemDrawerPaper: DrawerPaper,
    ItemCard:{
    },
    ItemCardPaper:{
      padding: 10,
    },
    FullwidthDrawerPaper: FullwidthDrawerPaper,
    createButton: {
      margin: 5,
      height: 30,
      width: 30,
    },
    appBar: {
      position: 'relative',
    },
    flex: {
      flex: 1,
    },
  }
});

class MainLayout extends Component {
  
  constructor(props) {

    super(props);
    this.state = {
    };
  }


  componentWillMount(){
    classes = this.context.styleManager.render(styleSheet);

    if(typeof window == "undefined"){
      // For render css on server-side
      this.props.exports.theme = this.context.styleManager;

    //  map._onResize()
    }
  }

  render() {

    const {} = this.state; // eslint-disable-line

    let {auth_form, ...other} = this.props;

    return <MainGrid
      classes={classes}
    >
      {this.props.children}


      {auth_form
        ? <Auth 
        />
        :
        null
      }

      <Informer
        message={this.props.informerMessage}
        documentActions={this.props.documentActions}
      />  
    </MainGrid>;
  }
}

MainLayout.propTypes = {
  exports: PropTypes.object.isRequired,
};

MainLayout.defaultProps = {
  exports: {},
  auth_form: true,
};

MainLayout.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

export default MainLayout;
