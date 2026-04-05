import React from 'react'
import { motion } from 'framer-motion'

import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Title from '../components/Title'
import Experience from '../components/Experience'
import Start from '../components/Start'
import Footer from '../components/Footer'

// Reusable scroll-triggered fade-up wrapper.
// `once: true` fires only on first entry — avoids re-animating on scroll-up.
const FadeUp = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.55, ease: 'easeOut', delay }}
    >
        {children}
    </motion.div>
)

const Main = () => {
    return (
        <>
            {/* Navbar is sticky — no entrance animation */}
            <Navbar />

            {/* Header already has CSS staggered animations, skip FadeUp */}
            <Header />

            {/* Each below-fold section fades up when it enters the viewport.
                Slight stagger between adjacent sections (0 → 0.08s) for polish. */}
            <FadeUp>
                <Skills />
            </FadeUp>

            <FadeUp delay={0.04}>
                <Projects />
            </FadeUp>

            <FadeUp delay={0.04}>
                <Title
                    title="Professional Experience"
                    subtitle="A snapshot of the roles where I've led and contributed to building reliable, secure and scalable systems."
                />
            </FadeUp>

            <FadeUp delay={0.08}>
                <Experience />
            </FadeUp>

            <FadeUp delay={0.04}>
                <Start />
            </FadeUp>

            <FadeUp>
                <Footer />
            </FadeUp>
        </>
    )
}

export default Main
