import React from 'react';
import { Link } from 'react-router-dom'

import logo from '../images/undraw_not_found.svg'

function NotFound() {
	return (
		<React.Fragment>
			<div className="Notfound__container">
				<img src={logo} alt="404" />
				<h1>Page Not Found!</h1>
				<h2>The page you were looking for could not be found.</h2>
				<Link className="button" to="/">Back to home</Link>
			</div>
		</React.Fragment>
	)
}

export default NotFound;
