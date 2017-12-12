import React, {Component} from 'react';
import PropTypes from "prop-types";

import Prototype from 'material-ui-components/src/Auth';

// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';

// import * as userActions from 'modules/Redux/actions/userActions';
// import * as documentActions from 'modules/Redux/actions/documentActions';

const defaultProps = {
	open: false,
  step: 1,
  showRegForm: true,
  allowPasswordRecovery: true
}

export default class Auth extends Component{

	static contextTypes = {
		userActions: PropTypes.object.isRequired,
		documentActions: PropTypes.object.isRequired,
	};

	render(){

		let {
			...other,
		} = this.props;

		const {
			userActions,
			documentActions,
		} = this.context;

		// console.log('Auth props', this.props);
		// console.log('Auth props', {...other});

		return <Prototype
			loginCanceled={userActions.loginCanceled}
			GetOwnData={userActions.GetOwnData}
			loginComplete={userActions.loginComplete}
			addInformerMessage={documentActions.addInformerMessage}
			{...other}
		/>
	}
}

Auth.defaultProps = defaultProps;

Auth.propTypes = {
}; 

// function mapStateToProps(state) {

//   return state;
// }


// function mapDispatchToProps(dispatch) {
//   // console.log('mapDispatchToProps');
//   // console.log(dispatch);

//   return {
//     // proxyActions: bindActionCreators(proxyActions, dispatch),
//     userActions: bindActionCreators(userActions, dispatch),
//     documentActions: bindActionCreators(documentActions, dispatch),
//     // documentActions: bindActionCreators(documentActions, dispatch),
//   }
// }



// export default connect(mapStateToProps, mapDispatchToProps)(Auth);
