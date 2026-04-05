import React from 'react'

import accentureLogo from '../images/logos/accenture-logo.png'
import transunionLogo from '../images/logos/transunion-logo.png'
import syscoLogo from '../images/logos/sysco-logo.png'

const experienceLogos = {
    'accenture-logo.png': accentureLogo,
    'transunion-logo.png': transunionLogo,
    'sysco-logo.png': syscoLogo,
}

const ExperienceCards = ({ experience }) => {
    return (
        <>
            {experience.map((item) => {
                const imgSrc = item.imageFile ? experienceLogos[item.imageFile] : null
                return (
                    <div className="Experience__column" key={item.id}>
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
                    </div>
                )
            })}
        </>
    )
}

export default ExperienceCards
