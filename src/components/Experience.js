import React from 'react'

import ExperienceCards from './ExperienceCards'
import data from '../db/data.json'

class Experience extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: data
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="Experience__container">
                    <div className="Experience__box">
                        <ExperienceCards experience={this.state.data.experience} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Experience