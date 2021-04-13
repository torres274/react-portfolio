import React from 'react'

class Title extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="Title__container">
					<div className="Title__text">
						<h1>{this.props.title}</h1>
						<h2>{this.props.subtitle}</h2>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Title;