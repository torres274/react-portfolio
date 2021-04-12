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

    handleClick = e => {
        console.log("Boton activo")
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>

                    <div className="">
                        <div>
                            <label>Name</label>
                            <input
                                onChange={this.handleChange}
                                className=""
                                type="text"
                                name="name"
                                value={this.state.name}
                            />
                        </div>

                        <div>
                            <label>Email</label>
                            <input
                                onChange={this.handleChange}
                                className=""
                                type="email"
                                name="email"
                                value={this.state.email}
                            />
                        </div>
                    </div>

                    <div className="">
                        <div>
                            <label>Message</label>
                            <textarea
                                onChange={this.handleChange}
                                className=""
                                name="message"
                                rows="5"
                                value={this.state.message}
                            ></textarea>
                        </div>
                    </div>

                    <div className="">
                        <div>
                            <Link to="/success">Submit</Link>
                            {/* <button onClick={this.handleClick}>Submit</button> */}
                            {/* <a href="/success">Submit</a> */}
                        </div>
                    </div>

                </form>
            </React.Fragment>
        )
    }
}

export default Form