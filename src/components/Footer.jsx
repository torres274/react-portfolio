import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faLinkedinIn, faGit } from '@fortawesome/free-brands-svg-icons'

import logo from '../images/logos/logo-white.png'

const Footer = () => {
    return (
        <React.Fragment>
            <div className="Footer__container">
                <div className="Footer__logo">
                    <Link to="/">
                        <img src={logo} alt="Daniel Torres personal logo" />
                    </Link>

                    <p>Thanks for scrolling — have a nice day!</p>
                </div>

                <div className="Footer__icons">
                    <a className="Footer__social" href="https://www.linkedin.com/in/daniel-torres-1996abc" rel="noreferrer noopener" target="_blank" aria-label="Visit my LinkedIn profile">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a className="Footer__social" href="https://github.com/torres274" rel="noreferrer noopener" target="_blank" aria-label="Visit my GitHub profile">
                        <FontAwesomeIcon icon={faGit} />
                    </a>
                </div>

                <div>
                    <p>Daniel Torres <FontAwesomeIcon icon={faCopyright} /> 2026</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer

