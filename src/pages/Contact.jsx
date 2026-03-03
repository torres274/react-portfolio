import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo, faTimes } from '@fortawesome/free-solid-svg-icons'

import Form from '../components/Form'
import logo from '../images/logos/logo-blue.png'
import profile from '../images/undraw_profile.svg'

const Contact = () => {
	const clear = () => {
		const form = document.querySelector('#contact-form')
		const counter = document.getElementById('messageCounter')

		if (form) {
			form.reset()
		}

		if (counter) {
			counter.textContent = '200'
		}
	}

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
						<button className="Contact__undo" type="button" onClick={clear}>
							<FontAwesomeIcon icon={faUndo} />
						</button>
						<Link className="Contact__return" to="/"><FontAwesomeIcon icon={faTimes} /></Link>
					</div>
				</div>
			</nav>

			<div className="Contact__hero">
				<img src={profile} alt="Profile" />
			</div>

			<Form />

		</React.Fragment>
	)
}

export default Contact

