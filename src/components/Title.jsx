import React from 'react'

const Title = ({ title, subtitle }) => {
	return (
		<React.Fragment>
			<div className="Title__container">
				<div className="Title__text">
					<h1>{title}</h1>
					<h2>{subtitle}</h2>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Title;

