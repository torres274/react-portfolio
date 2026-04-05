import React from 'react'
import { motion } from 'framer-motion'

import ProgressBar from '../components/ProgressBar'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Title from '../components/Title'
import Experience from '../components/Experience'
import Start from '../components/Start'
import Footer from '../components/Footer'

// Generic scroll-triggered fade-up for sections that don't manage
// their own internal stagger (Projects, Title, Start, Footer).
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

const Main = () => (
    <>
        {/* Fixed progress bar — must be first to stay above everything */}
        <ProgressBar />

        {/* Navbar is sticky — no entrance animation */}
        <Navbar />

        {/* Header has its own CSS stagger animations */}
        <Header />

        {/* Skills manages its own column stagger via Framer Motion variants */}
        <Skills />

        <FadeUp delay={0.04}>
            <Projects />
        </FadeUp>

        <FadeUp delay={0.04}>
            <Title
                title="Professional Experience"
                subtitle="A snapshot of the roles where I've led and contributed to building reliable, secure and scalable systems."
            />
        </FadeUp>

        {/* ExperienceCards manages its own card stagger internally */}
        <Experience />

        <FadeUp delay={0.04}>
            <Start />
        </FadeUp>

        <FadeUp>
            <Footer />
        </FadeUp>
    </>
)

export default Main
