import React from 'react'

import code from '../images/dev.svg'
import tools from '../images/tools.svg'

const Skills = () => {
    return (
        <React.Fragment>
            <div className="Skills__container">
                <div className="Skills__box">
                    <div className="Skills__column">
                        <img src={code} alt="Code" height="48" />
                        <h1 className="Skills__title">Backend & Full Stack</h1>
                        <p>I specialize in designing and implementing scalable backend services and full stack solutions.</p>
                        <p className="text__blue">Backend:</p>
                        <p>Java (Spring Boot), Python (Flask)</p>
                        <p className="text__blue">Frontend:</p>
                        <p>React, JavaScript (ES6+), HTML5, CSS3</p>
                        <p className="text__blue">Libraries & frameworks:</p>
                        <ul>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>

                    <div className="Skills__column">
                        <img src={tools} alt="Tools" height="48" />
                        <h1 className="Skills__title">Cloud & DevOps</h1>
                        <p>I help teams ship reliably by combining software engineering with modern DevOps practices.</p>
                        <p className="text__blue">Cloud / DevOps:</p>
                        <ul>
                            <li>GCP, AWS</li>
                            <li>Jenkins, Bitbucket Pipelines</li>
                            <li>Docker</li>
                            <li>Git</li>
                            <li>SDLC, Agile / Scrum</li>
                        </ul>
                    </div>

                    <div className="Skills__column">
                        <img src={code} alt="Code" height="48" />
                        <h1 className="Skills__title">Databases & Other</h1>
                        <p>I work with relational and NoSQL databases and a variety of enterprise tools.</p>
                        <p className="text__blue">Databases:</p>
                        <p>Oracle, PostgreSQL, MySQL, DynamoDB</p>
                        <p className="text__blue">Other:</p>
                        <ul>
                            <li>AEM</li>
                            <li>GraphQL</li>
                            <li>Checkmarx</li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Skills

