import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import logo from '../images/logos/logo-white.png'
import resume from '../download/Daniel Torres Calvo - Resume.pdf'

const Navbar = () => {
    return (
        <React.Fragment>
            <nav className="Navbar">
                <div className="Navbar__container">
                    <div className="Navbar__logo">
                        <Link to="/">
                            <img src={logo} alt="Daniel Torres | Software Developer" />
                        </Link>
                    </div>

                    <div className="Navbar__right">
                        <a href={resume} className="Navbar__ghostButton" target="_blank" rel="noreferrer">Download Resume</a>
                        <a href="#contact" className="Navbar__ctaButton">Contact Me!</a>
                        <a href="https://github.com/torres274" target="_blank" rel="noreferrer noopener" aria-label="GitHub" className="Navbar__iconButton">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://www.linkedin.com/in/daniel-torres-1996abc" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="Navbar__iconButton">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar;

