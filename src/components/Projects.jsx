import React from 'react'

import projectsData from '../db/data.json'

const Projects = () => {
    const { projects } = projectsData

    return (
        <React.Fragment>
            <div id="projects" className="Projects__container">
                <h1>My Recent Work</h1>
                <h2>Here are a few projects I've worked on. Want to see more? <a href="mailto:daniel.torres96@hotmail.com">Email me</a></h2>

                <div className="Projects__cards">
                    {projects.map((project) => (
                        <article key={project.id} className={`ProjectsCards__container ${!project.imageFile ? 'ProjectsCard--noImage' : ''}`}>
                            {project.imageFile && (
                                <img src={project.imageFile} alt={project.title} />
                            )}
                            <div className="ProjectsCard__content">
                                <h3 className="ProjectsCard__title">{project.title}</h3>
                                <p className="ProjectsCard__subtitle">{project.subtitle}</p>
                                <p className="ProjectsCard__role">{project.role}</p>
                                <p className="ProjectsCard__description">{project.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Projects

