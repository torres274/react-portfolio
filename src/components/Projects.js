import React from 'react'

import ProjectsCards from './ProjectsCards'
import data from '../db/data.json'

class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: data
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="Projects__container">
                    <h1>My Recent Work</h1>
                    <h2>Here are a few projects I've worked. Want to see more? <a href="mailto:daniel.torres96@hotmail.com">Email me</a></h2>

                    <div className="Projects__box">
                        <div className="Projects__cards">
                            <ProjectsCards projects={this.state.data.projects} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Projects