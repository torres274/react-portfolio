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
        <React.Fragment>
            {experience.map((item) => {
                const imgSrc = item.imageFile ? experienceLogos[item.imageFile] : item.imageURL || null
                const alt = item.description.split('—')[0].trim()
                return (
                    <div className="Experience__column" key={item.id}>
                        {imgSrc && (
                            <div className="Experience__image">
                                <img src={imgSrc} alt={alt} width="180" />
                            </div>
                        )}
                        <p>{item.description}</p>
                    </div>
                )
            })}
        </React.Fragment>
    )
}

export default ExperienceCards

