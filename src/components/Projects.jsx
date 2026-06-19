import React, { useEffect, useMemo, useState } from 'react'

import { CONTACT_EMAIL } from '../config/contact'
import projectsData from '../db/data.json'

const Projects = () => {
    const { projects } = projectsData
    const visibleProjects = projects

    const carouselProjects = useMemo(() => {
        if (visibleProjects.length === 0) return []
        return [
            visibleProjects[visibleProjects.length - 1],
            ...visibleProjects,
            visibleProjects[0],
        ]
    }, [visibleProjects])

    const [activeIndex, setActiveIndex] = useState(1)
    const [isPaused, setIsPaused] = useState(false)
    const [isTransitionEnabled, setIsTransitionEnabled] = useState(true)

    const goNext = () => {
        setIsTransitionEnabled(true)
        setActiveIndex((prev) => (prev >= visibleProjects.length + 1 ? 1 : prev + 1))
    }

    const goPrev = () => {
        setIsTransitionEnabled(true)
        setActiveIndex((prev) => (prev <= 0 ? visibleProjects.length : prev - 1))
    }

    const goTo = (realIndex) => {
        setIsTransitionEnabled(true)
        setActiveIndex(realIndex + 1)
    }

    useEffect(() => {
        if (isPaused || visibleProjects.length <= 1) return undefined
        const timer = setInterval(() => {
            goNext()
        }, 2800)

        return () => clearInterval(timer)
    }, [isPaused, visibleProjects.length])

    useEffect(() => {
        const onVisibilityChange = () => {
            setIsPaused(document.hidden)
        }

        document.addEventListener('visibilitychange', onVisibilityChange)
        return () => document.removeEventListener('visibilitychange', onVisibilityChange)
    }, [])

    useEffect(() => {
        if (visibleProjects.length === 0) return
        if (activeIndex < 0 || activeIndex > visibleProjects.length + 1) {
            setIsTransitionEnabled(false)
            setActiveIndex(1)
        }
    }, [activeIndex, visibleProjects.length])

    const handleTransitionEnd = () => {
        if (activeIndex === 0) {
            setIsTransitionEnabled(false)
            setActiveIndex(visibleProjects.length)
        } else if (activeIndex === visibleProjects.length + 1) {
            setIsTransitionEnabled(false)
            setActiveIndex(1)
        }
    }

    useEffect(() => {
        if (!isTransitionEnabled) {
            const raf = requestAnimationFrame(() => {
                setIsTransitionEnabled(true)
            })
            return () => cancelAnimationFrame(raf)
        }
        return undefined
    }, [isTransitionEnabled])

    const visibleIndex = visibleProjects.length > 0
        ? ((activeIndex - 1 + visibleProjects.length) % visibleProjects.length)
        : 0

    const projectMailto = (title) =>
        `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Question about ${title}`)}`

    return (
        <div id="projects" className="Projects__container">
            <h1>My Recent Work</h1>
            <h2>
                Representative work across product types and stacks.{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>Ask me about other engagements.</a>
            </h2>

            <div className="Projects__carousel">
                <button
                    type="button"
                    className="Projects__arrow Projects__arrow--left"
                    onClick={goPrev}
                    aria-label="Previous project"
                >
                    ‹
                </button>

                <div className="Projects__viewport">
                    <div
                        className={`Projects__track${isTransitionEnabled ? '' : ' Projects__track--noTransition'}`}
                        style={{ transform: `translateX(calc(50% - ${activeIndex} * (var(--projects-slide-width) + var(--projects-slide-gap)) - (var(--projects-slide-width) / 2)))` }}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {carouselProjects.map((project, index) => {
                            const normalizedIndex = (index - 1 + visibleProjects.length) % visibleProjects.length
                            const isActive = normalizedIndex === visibleIndex
                            const isClone = index === 0 || index === carouselProjects.length - 1
                            const isAdjacent = Math.abs(index - activeIndex) === 1
                            const hasExternalLink = project.projectURL && project.projectURL !== '#'

                            return (
                                <article
                                    key={`${project.id}-${index}`}
                                    className={`ProjectsCards__container${!project.imageFile ? ' ProjectsCard--noImage' : ''}${isActive ? ' is-active' : ''}${isAdjacent ? ' is-adjacent' : ''}`}
                                    aria-hidden={isClone}
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

                                        {hasExternalLink ? (
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
                                        ) : (
                                            <a
                                                href={projectMailto(project.title)}
                                                className="ProjectsCard__cta"
                                                aria-label={`Ask about ${project.title}`}
                                            >
                                                Ask about this project
                                                <span className="ProjectsCard__cta-arrow" aria-hidden="true">→</span>
                                            </a>
                                        )}
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>

                <button
                    type="button"
                    className="Projects__arrow Projects__arrow--right"
                    onClick={goNext}
                    aria-label="Next project"
                >
                    ›
                </button>
            </div>

            {visibleProjects.length > 1 && (
                <div className="Projects__dots" role="tablist" aria-label="Project slides">
                    {visibleProjects.map((project, index) => (
                        <button
                            key={project.id}
                            type="button"
                            role="tab"
                            aria-selected={index === visibleIndex}
                            aria-label={`Go to ${project.title}`}
                            className={`Projects__dot${index === visibleIndex ? ' is-active' : ''}`}
                            onClick={() => goTo(index)}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Projects
