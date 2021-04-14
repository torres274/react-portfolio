import React from 'react'

class ExperienceCards extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.experience.map((experience) => {
                    return (
                        <div className="Experience__column" key={experience.id}>
                            <div className="Experience__image">
                                <img src={experience.imageURL} alt="Experience" width="180" />
                            </div>
                            <p>{experience.description}</p>
                        </div>
                    )
                })}
            </React.Fragment>
        )
    }
}

export default ExperienceCards