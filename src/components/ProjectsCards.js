import React from 'react'
import { Link } from 'react-router-dom'

import './styles/ProjectsCards.css'

class ProjectsCards extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.projects.map((project) => {
                    return (
                        <div className="ProjectsCards__container" key={project.id}>
                            <figure>
                                <img src={project.imageURL} alt="Hola" width="300" />
                                <figcaption>
                                    <h1>{project.description}</h1>
                                    <Link to={project.projectURL}>
                                        <span>visit website</span>
                                        <span><i className="fas fa-angle-right"></i>-</span>
                                    </Link>
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