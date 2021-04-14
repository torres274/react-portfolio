import React from 'react'

import ecommerce from '../images/projects/mouse.png'
import dashboard from '../images/projects/admin.png'
import landing from '../images/projects/ids.png'

class Projects extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="Projects__container">
                    <h1>My Recent Work</h1>
                    <h2>Here are a few projects I've worked. Want to see more? <a href="mailto:daniel.torres96@hotmail.com">Email me</a></h2>

                    <div className="Projects__cards">
                        <div className="ProjectsCards__container">
                            <img src={ecommerce} alt="Project" />
                        </div>

                        <div className="ProjectsCards__container">
                            <img src={dashboard} alt="Project" />
                        </div>

                        <div className="ProjectsCards__container">
                            <img src={landing} alt="Project" />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Projects