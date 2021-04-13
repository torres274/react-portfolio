import React from 'react'
import { Link } from 'react-router-dom'

class Start extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="Start__container">
                    <div className="Start__box">
                        <div className="Start__columns">
                            <div className="Start__column">
                                <h1>Start a project</h1>
                            </div>
                            <div className="Start__column">
                                <h2>Interested in working together?</h2>
                            </div>
                            <div className="Start__column">
                                <Link className="button" to="/contact">Contact Me!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Start