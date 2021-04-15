import React from 'react'

import code from '../images/dev.svg'
import tools from '../images/tools.svg'

class Skills extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="Skills__container">
                    <div className="Skills__box">
                        <div className="Skills__column">
                            <img src={code} alt="Code" height="48" />
                            <h1 className="Skills__title">Front-end Developer</h1>
                            <p>I have experience collaborating with design.</p>
                            <p className="text__blue">Experience with:</p>
                            <p>HTML5, CSS3, JavaScript, SASS</p>
                            <p className="text__blue">Libraries:</p>
                            <ul>
                                <li>React</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>

                        <div className="Skills__column">
                            <img src={tools} alt="Tools" height="48" />
                            <h1 className="Skills__title">Tools</h1>
                            <p>I have used some indispensable tools to work.</p>
                            <p className="text__blue">Tools:</p>
                            <ul>
                                <li>Git / GitHub</li>
                                <li>Terminal</li>
                                <li>MySQL / SQL Server</li>
                                <li>OracleDB / MongoDB</li>
                                <li>Visual Studio Code</li>
                            </ul>
                        </div>

                        <div className="Skills__column">
                            <img src={code} alt="Code" height="48" />
                            <h1 className="Skills__title">Back-end Developer</h1>
                            <p>Experience developing applications in some languages.</p>
                            <p className="text__blue">Languages I speak:</p>
                            <p>JavaScript, Java, PHP, C#</p>
                            <p className="text__blue">Frameworks:</p>
                            <ul>
                                <li>Node.js</li>
                                <li>Spring</li>
                                <li>Laravel</li>
                                <li>ASP.NET Web Forms</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Skills