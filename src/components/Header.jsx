import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

import avatar from '../images/undraw_profile.svg'
import { CONTACT_EMAIL } from '../config/contact'

const ROLES = [
    'Senior Software Engineer',
    'Backend Architect',
    'Full Stack Developer',
    'Cloud & DevOps Engineer',
]

const Header = () => {
    const [roleIndex, setRoleIndex] = useState(0)
    const prefersReducedMotion = useReducedMotion()

    useEffect(() => {
        if (prefersReducedMotion) return undefined

        const interval = setInterval(() => {
            setRoleIndex(i => (i + 1) % ROLES.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [prefersReducedMotion])

    const activeRole = prefersReducedMotion ? ROLES[0] : ROLES[roleIndex]

    return (
        <header id="about" className="Header">
            <div className="Header__hero">
                <p className="Header__name">Daniel Torres</p>

                <h1 className="Header__headline" aria-live="polite" aria-atomic="true">
                    {prefersReducedMotion ? (
                        <span className="Header__headline-text">{activeRole}</span>
                    ) : (
                        <AnimatePresence mode="popLayout">
                            <motion.span
                                key={roleIndex}
                                className="Header__headline-text"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.38, ease: [0.25, 0.1, 0.25, 1] }}
                            >
                                {activeRole}
                            </motion.span>
                        </AnimatePresence>
                    )}
                </h1>

                <p className="Header__sub">
                    Seven-plus years building backend and full-stack software for global enterprises,
                    from distributed services to cloud-native platforms.
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
                    <a href={`mailto:${CONTACT_EMAIL}`} className="Header__ghostButton">Get in Touch</a>
                </div>

                <a href="#skills" className="Header__scroll" aria-label="Scroll to skills section">
                    <span className="Header__scroll-chevron" aria-hidden="true" />
                </a>
            </div>
        </header>
    )
}

export default Header
