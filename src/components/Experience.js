import React from 'react'

class Experience extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="Experience__container">
                    <div className="Experience__box">
                        <div className="Experience__column">
                            <img alt="Company" />
                            <p>I have experience collaborating with design.</p>
                        </div>

                        <div className="Experience__column">
                            <img alt="Code" />
                            <p>I have experience collaborating with design.</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Experience