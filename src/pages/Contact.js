import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo, faTimes } from '@fortawesome/free-solid-svg-icons'

import Form from '../components/Form'
import logo from '../images/logos/logo-blue.png'
import profile from '../images/undraw_profile.svg'

class Contact extends React.Component {
	resetForm = () => {
		const form = document.getElementById('form')
		form.reset()
	}

	render() {
		return (
			<React.Fragment>
				<nav className="Contact__container">
					<div className="Contact__navbar">
						<div className="Contact__logo">
							<Link to="/">
								<img src={logo} alt="Daniel Torres | Software Developer" height="48" />
							</Link>
						</div>

						<div className="Contact__menu">
							<div className="Contact__undo">
								<FontAwesomeIcon icon={faUndo} />
							</div>
							<Link className="Contact__return" to="/"><FontAwesomeIcon icon={faTimes} /></Link>
						</div>
					</div>
				</nav>

				<div className="Container__hero">
					<img src={profile} alt="Profile" />
				</div>

				<Form />

			</React.Fragment>
		)
	}
}

export default Contact