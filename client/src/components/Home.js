import React, { Component } from 'react'
import { connect } from 'react-redux'

import Login from './Authentication/Login.js';
import Signup from './Authentication/Signup.js';

class Home extends Component {
	
	render () {
		const { isAuthenticated } = this.props
		return (
			<div>
				{ isAuthenticated ? <Signup /> : <Login/ > }
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	isAuthenticated: !!state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Home)