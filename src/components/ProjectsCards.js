import React from 'react'

class ProjectsCards extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.projects.map((project) => {
                    return (
                        <div className="ProjectsCards__container" key={project.id}>
                            <figure>
                                <img src={project.imageURL} alt="Project" />
                                <figcaption>
                                    <h1>{project.description}</h1>
                                </figcaption>
                            </figure>
                        </div>
                    )
                })}
            </React.Fragment>
        )
    }
}

export default ProjectsCards