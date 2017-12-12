// /**
// *
// * MainLayout
// *
// */

// import React, { Component } from "react";
// import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

// import PropTypes from "prop-types";

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import createMuiTheme from 'material-ui/styles/theme';
// import createPalette from 'material-ui/styles/palette';
// import { createStyleSheet } from 'material-ui/styles';
// import {blueGrey, grey, amber} from 'material-ui/styles/colors';

// import {MainLayout} from 'modules/Templates';
 
// var customStyles;

// class App extends Component {
  
//   constructor(props) {
//     super(props);
//     this.state = {
//     };

//     // console.log('MainLayout constructor');

//     customStyles = createMuiTheme({
//       userAgent: typeof window != "undefined" && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : props.userAgent || 'all',
//       palette: createPalette({
//         primary: blueGrey,
//       }),
//       colors: {
//         warning: '#FFC107',
//         danger: '#F44336',
//         info: '#2196F3',
//       },
//     });
//   }



//   render() {

//     const {} = this.state; // eslint-disable-line

//     return (
//       <MuiThemeProvider theme={customStyles}>

//         <MainLayout
//           {...this.props}
//         >
//           {this.props.children}
//         </MainLayout>
//       </MuiThemeProvider>
//     );
//   }
// }

// App.propTypes = {
// };

// App.defaultProps = {
// };

// export default App;