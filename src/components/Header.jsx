import React from 'react'

import avatar from '../images/undraw_profile.svg'
import resume from '../download/Daniel Torres Calvo - Resume.pdf'

const Header = () => {
    return (
        <header id="about" className="Header">
            <div className="Header__hero">
                <div className="Header__badge">
                    <span className="Header__badge-dot" aria-hidden="true" />
                    Open to opportunities
                </div>
                <h1 className="Header__headline">
                    Senior Software Engineer
                </h1>
                <p className="Header__sub">
                    7+ years designing and building backend and full-stack solutions
                    for global enterprises — from microservices at scale to cloud-native infrastructure.
                </p>
                <img
                    src={avatar}
                    alt="Portrait illustration of Daniel Torres"
                    className="Header__avatar"
                    width="96"
                    height="96"
                />
                <div className="Header__actions">
                    <a href="#projects" className="Header__button">View Projects</a>
                    <a href={resume} className="Header__ghostButton" target="_blank" rel="noreferrer">
                        Download Resume
                    </a>
                </div>
                <a href="#skills" className="Header__scroll" aria-label="Scroll to skills section">
                    <span className="Header__scroll-chevron" aria-hidden="true" />
                </a>
            </div>
        </header>
    )
}

export default Header
