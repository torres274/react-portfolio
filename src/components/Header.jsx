import React from 'react'

import avatar from '../images/undraw_profile.svg'
import resume from '../download/Daniel Torres Calvo - Resume.pdf'

const Header = () => {
    return (
        <React.Fragment>
            <header id="about" className="Header">
                <div className="Header__hero">
                    <h1>Senior Software Engineer</h1>
                    <h2>7+ years designing and building backend and full stack solutions for global enterprises.</h2>
                    <img src={avatar} alt="Portrait illustration of Daniel" className="Header__avatar" />
                    <div className="Header__actions">
                        <a href="#projects" className="Header__button">View Projects</a>
                        <a href={resume} className="Header__ghostButton" target="_blank" rel="noreferrer">Download Resume</a>
                    </div>
                </div>
                <div className="Header__intro">
                    <h3>Hi, I'm Daniel. Senior Software Engineer.</h3>
                    <p>I design and implement scalable backend and full stack solutions, bridging the gap between complex software design and high-availability production environments.</p>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header
