/**
*
* Menu
*
*/

import React, { Component } from "react";
import { Link } from 'react-router';

import PropTypes from "prop-types";

const style = {
  display: "flex",
  justifyContent: "center",
  height: "100px",
  alignItems: "center",
  backgroundColor: "#fcecd7",
  borderRadius: "4px"
};

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleValue: ""
    };
  }

  render() {
    const { exampleValue } = this.state; // eslint-disable-line
    const { exampleProp } = this.props; // eslint-disable-line

    console.log('router', this.context.router);

    return <ul>
      <li><Link to='/home'>Home</Link></li>
      <li><Link to='/templates/auth'>Template/Auth</Link></li>
    </ul>;
  }
}

Menu.propTypes = {
  exampleProp: PropTypes.string,
};

Menu.contextTypes = {
  router: PropTypes.func.isRequired,
},

Menu.defaultProps = {
  exampleProp: ""
};

export default Menu;
