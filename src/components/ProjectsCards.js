import React from 'react'

class ProjectsCards extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.projects.map((project) => {
                    return (
                        <div className="ProjectsCards__container" key={project.id}>
                            <img src={project.imageURL} alt="Project" />
                        </div>
                    )
                })}
            </React.Fragment>
        )
    }
}

export default ProjectsCards