import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import logo from '../images/logos/logo-white.png'

class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="Footer__container">
                    <div>
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>

                        <p>Have a nice day!</p>

                        <a className="Footer__social" href="https://www.linkedin.com/in/daniel-torres-1996abc" rel="noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>

                        <p>Daniel Torres <FontAwesomeIcon icon={faCopyright} /> 2021</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Footer