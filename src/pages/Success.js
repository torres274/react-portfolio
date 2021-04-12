import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../images/success.svg'

class Success extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div>
					<img src={logo} alt="" />
					<h1>Message received. Thanks!</h1>
					<h2>I'll be in touch with you shortly.</h2>
					<Link to="/">Back to home</Link>
				</div>
			</React.Fragment>
		)
	}
}

export default Success