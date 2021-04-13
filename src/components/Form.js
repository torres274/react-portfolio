import React from 'react'
import { Link } from 'react-router-dom'

class Form extends React.Component {
    state = {
        name: "",
        email: "",
        message: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // handleClick = e => {
    //     console.log("Boton activo")
    // }
    // handleSubmit = e => {
    //     e.preventDefault()
    //     console.log(this.state)
    // }

    render() {
        return (
            <React.Fragment>
                <div className="Form__container">
                    <h1>How can I help you?</h1>

                    <form onSubmit={this.handleSubmit}>

                        <div className="Form__top">
                            <div className="Form__input">
                                <label>Name</label>
                                <input
                                    onChange={this.handleChange}
                                    type="text"
                                    name="name"
                                    value={this.state.name}
                                />
                            </div>

                            <div className="Form__input">
                                <label>Email</label>
                                <input
                                    onChange={this.handleChange}
                                    type="email"
                                    name="email"
                                    value={this.state.email}
                                />
                            </div>
                        </div>

                        <div className="Form__bottom">
                            <div className="Form__input">
                                <label>Message</label>
                                <textarea
                                    onChange={this.handleChange}
                                    name="message"
                                    rows="5"
                                    value={this.state.message}
                                ></textarea>
                            </div>
                        </div>

                        <Link className="Form_button button" to="/success">Submit</Link>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default Form