import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import avatar from '../images/undraw_profile.svg'
import resume from '../download/Daniel Torres Calvo - Resume.pdf'

const ROLES = [
    'Senior Software Engineer',
    'Backend Architect',
    'Full Stack Developer',
    'Cloud & DevOps Engineer',
]

const Header = () => {
    const [roleIndex, setRoleIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex(i => (i + 1) % ROLES.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <header id="about" className="Header">
            <div className="Header__hero">
                <div className="Header__badge">
                    <span className="Header__badge-dot" aria-hidden="true" />
                    Open to opportunities
                </div>

                {/* aria-live so screen readers announce role changes */}
                <h1 className="Header__headline" aria-live="polite" aria-atomic="true">
                    <AnimatePresence mode="popLayout">
                        <motion.span
                            key={roleIndex}
                            className="Header__headline-text"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.38, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            {ROLES[roleIndex]}
                        </motion.span>
                    </AnimatePresence>
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
