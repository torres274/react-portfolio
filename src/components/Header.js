import React from 'react'

import './styles/Header.scss'
import avatar from '../images/undraw_profile.svg'
import hero from '../images/undraw_programming.svg'

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="Header__container">
                    <div className="Header__top">
                        <h1>Software Developer</h1>
                        <h2>I design and code interesting things, and I like it.</h2>
                        <img src={avatar} alt="Avatar" />
                    </div>

                    <div className="Header__bottom">
                        <img src={hero} alt="Programming" />
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default Header