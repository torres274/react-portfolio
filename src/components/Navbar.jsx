import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import logo from '../images/logos/logo-white.png'
import resume from '../download/Daniel Torres Calvo - Resume.pdf'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <nav className={`Navbar${scrolled ? ' Navbar--scrolled' : ''}`}>
            <div className="Navbar__container">
                <div className="Navbar__logo">
                    <Link to="/">
                        <img src={logo} alt="Daniel Torres | Software Engineer" />
                    </Link>
                </div>

                <div className="Navbar__right">
                    <a href={resume} className="Navbar__ghostButton" target="_blank" rel="noreferrer">
                        Download Resume
                    </a>
                    <a href="#contact" className="Navbar__ctaButton">Contact Me</a>
                    <a
                        href="https://github.com/torres274"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="GitHub profile"
                        className="Navbar__iconButton"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/daniel-torres-1996abc"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="LinkedIn profile"
                        className="Navbar__iconButton"
                    >
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
