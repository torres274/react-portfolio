import React from 'react'

import ExperienceCards from './ExperienceCards'
import data from '../db/data.json'

const Experience = () => (
    <div id="experience" className="Experience__container">
        <ExperienceCards experience={data.experience} />
    </div>
)

export default Experience
