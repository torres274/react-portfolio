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
				<nav>
					<div className="container">
						<div className="logo">
							<Link to="/">
								<img src={logo} alt="Daniel Torres | Software Developer" height="48" />
							</Link>
						</div>

						<div className="action">
							<div>
								<FontAwesomeIcon icon={faUndo} />
							</div>
							<div>
								<Link to="/">
									<FontAwesomeIcon icon={faTimes} />
								</Link>
							</div>
						</div>
					</div>
				</nav>

				<div>
					<div>
						<img src={profile} alt="" />
					</div>
				</div>

				<Form />

			</React.Fragment>
		)
	}
}

export default Contact