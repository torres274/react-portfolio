import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../images/success.svg'

class Success extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="Success__container">
					<img src={logo} alt="Success" />
					<h1>Message received. Thanks!</h1>
					<h2>I'll be in touch with you shortly.</h2>
					<Link className="button" to="/">Back to home</Link>
				</div>
			</React.Fragment>
		)
	}
}

export default Success