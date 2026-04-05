import React from 'react'
import { motion } from 'framer-motion'

import code from '../images/dev.svg'
import tools from '../images/tools.svg'

const SKILLS = [
    {
        icon: code,
        iconAlt: 'Backend & Full Stack',
        title: 'Backend & Full Stack',
        description: 'Scalable backend services and full-stack solutions, from API design to production deployment.',
        categories: [
            { label: 'Backend',  tags: ['Java', 'Spring Boot', 'Python', 'Flask'] },
            { label: 'Frontend', tags: ['React', 'JavaScript ES6+', 'HTML5', 'CSS3'] },
        ],
    },
    {
        icon: tools,
        iconAlt: 'Cloud & DevOps',
        title: 'Cloud & DevOps',
        description: 'Reliable delivery pipelines combining software engineering with modern DevOps practices.',
        categories: [
            { label: 'Cloud',     tags: ['GCP', 'AWS'] },
            { label: 'CI/CD',     tags: ['Jenkins', 'Bitbucket Pipelines', 'Docker'] },
            { label: 'Practices', tags: ['Git', 'Agile / Scrum', 'SDLC'] },
        ],
    },
    {
        icon: code,
        iconAlt: 'Databases & Other',
        title: 'Databases & Other',
        description: 'Relational and NoSQL databases, enterprise CMS, GraphQL and security tooling.',
        categories: [
            { label: 'Databases', tags: ['Oracle', 'PostgreSQL', 'MySQL', 'DynamoDB'] },
            { label: 'Tools',     tags: ['AEM', 'GraphQL', 'Checkmarx'] },
        ],
    },
]

// Stagger parent: orchestrates children entrance sequence
const gridVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
}

// Each column fades up individually
const columnVariants = {
    hidden:  { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.52, ease: 'easeOut' } },
}

const Skills = () => (
    <div className="Skills__container">
        <motion.div
            className="Skills__box"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {SKILLS.map((group) => (
                <motion.div
                    key={group.title}
                    className="Skills__column"
                    variants={columnVariants}
                >
                    <img src={group.icon} alt={group.iconAlt} height="44" loading="lazy" />
                    <h3 className="Skills__title">{group.title}</h3>
                    <p className="Skills__description">{group.description}</p>

                    {group.categories.map((cat) => (
                        <div key={cat.label} className="Skills__category">
                            <span className="Skills__category-label">{cat.label}</span>
                            <div className="Skills__tags">
                                {cat.tags.map((tag) => (
                                    <span key={tag} className="Skills__tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>
            ))}
        </motion.div>
    </div>
)

export default Skills
