import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Navbar.scss'
import logo from '../images/logos/logo-blue.png'
import resume from '../download/Daniel_Torres_CV.pdf'

class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav className="Navbar">
                    <div className="Navbar__container">
                        <div className="Navbar__logo">
                            <Link to="/">
                                <img src={logo} alt="Daniel Torres | Software Developer" height="48" />
                            </Link>
                        </div>

                        <div className="Navbar__menu">
                            <Link className="Navbar__resume" to={resume} rel="noreferrer" target="_blank">Download Resume</Link>
                            <div className="Navbar__item">
                                <Link className="button" to="/contact">Contact Me!</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default Navbar;