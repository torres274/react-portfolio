import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import logo from '../images/logos/logo-white.png'

const NAV_LINKS = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
]

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

                <div className="Navbar__links" aria-label="Primary navigation">
                    {NAV_LINKS.map((link) => (
                        <a key={link.href} href={link.href} className="Navbar__link">
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="Navbar__right">
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
