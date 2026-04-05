import React from 'react'

import ExperienceCards from './ExperienceCards'
import data from '../db/data.json'

// ExperienceCards renders the .Experience__box grid internally
// (with Framer Motion stagger), so this component only provides
// the outer container + positioning context.
const Experience = () => (
    <div className="Experience__container">
        <ExperienceCards experience={data.experience} />
    </div>
)

export default Experience
