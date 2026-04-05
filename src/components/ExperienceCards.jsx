import React from 'react'
import { motion } from 'framer-motion'

import accentureLogo from '../images/logos/accenture-logo.png'
import transunionLogo from '../images/logos/transunion-logo.png'
import syscoLogo from '../images/logos/sysco-logo.png'

const experienceLogos = {
    'accenture-logo.png': accentureLogo,
    'transunion-logo.png': transunionLogo,
    'sysco-logo.png': syscoLogo,
}

// Parent: triggers whileInView and passes stagger down to children
const gridVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1, delayChildren: 0.05 }
    }
}

// Each card fades up individually
const cardVariants = {
    hidden:  { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

const ExperienceCards = ({ experience }) => (
    <motion.div
        className="Experience__box"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
    >
        {experience.map((item) => {
            const imgSrc = item.imageFile ? experienceLogos[item.imageFile] : null
            return (
                <motion.div
                    key={item.id}
                    className="Experience__column"
                    variants={cardVariants}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                    {imgSrc && (
                        <div className="Experience__image">
                            <img src={imgSrc} alt={item.company} width="180" loading="lazy" />
                        </div>
                    )}
                    <div className="Experience__meta">
                        <span className="Experience__role">{item.role}</span>
                        <span className="Experience__period">{item.period}</span>
                    </div>
                    <p>{item.description}</p>
                </motion.div>
            )
        })}
    </motion.div>
)

export default ExperienceCards
