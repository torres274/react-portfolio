import React from 'react';
import { Link } from 'react-router-dom'

import logo from '../images/undraw_not_found.svg'

function NotFound() {
	return (
		<React.Fragment>
			<div>
				<img src={logo} alt="" height="100" />
				<Link to="/">Back to home</Link>
			</div>
		</React.Fragment>
	)
}

export default NotFound;
