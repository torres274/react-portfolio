import React from 'react'

import projectsData from '../db/data.json'

const Projects = () => {
    const { projects } = projectsData

    return (
        <div id="projects" className="Projects__container">
            <h1>My Recent Work</h1>
            <h2>
                Here are a few projects I've worked on recently.{' '}
                <a href="mailto:daniel.torres96@hotmail.com">Want to see more?</a>
            </h2>

            <div className="Projects__cards">
                {projects.map((project) => (
                    <article
                        key={project.id}
                        className={`ProjectsCards__container${!project.imageFile ? ' ProjectsCard--noImage' : ''}`}
                    >
                        {project.imageFile && (
                            <img src={project.imageFile} alt={project.title} loading="lazy" />
                        )}

                        <div className="ProjectsCard__content">
                            <h3 className="ProjectsCard__title">{project.title}</h3>
                            <p className="ProjectsCard__subtitle">{project.subtitle}</p>
                            <p className="ProjectsCard__role">{project.role}</p>
                            <p className="ProjectsCard__description">{project.description}</p>

                            {project.tags?.length > 0 && (
                                <div className="ProjectsCard__tags" aria-label="Technologies used">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="ProjectsCard__tag">{tag}</span>
                                    ))}
                                </div>
                            )}

                            {project.projectURL && project.projectURL !== '#' && (
                                <a
                                    href={project.projectURL}
                                    className="ProjectsCard__cta"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    aria-label={`View ${project.title} project`}
                                >
                                    View Project
                                    <span className="ProjectsCard__cta-arrow" aria-hidden="true">→</span>
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default Projects
