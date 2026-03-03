import React from 'react'

import ExperienceCards from './ExperienceCards'
import data from '../db/data.json'

const Experience = () => {
    return (
        <React.Fragment>
            <div className="Experience__container">
                <div className="Experience__box">
                    <ExperienceCards experience={data.experience} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Experience

