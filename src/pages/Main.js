import React from "react"

import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Title from "../components/Title"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Experience from "../components/Experience"
import Footer from "../components/Footer"

class Main extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Header />
				<Title
					title="Hi, I’m Daniel. Nice to meet you."
					subtitle="I consider myself a responsible and motivated software developer. I'm passionate about creating, doing and learning new things. I stand out for being very good at adapting to new environments, communicating, listening and collaborating."
				/>
				<Skills />
				<Projects />
				<Title
					title="My Experience"
					subtitle="This is a summary of the experiences I had in past projects and internships."
				/>
				<Experience />
				<Footer />
			</React.Fragment>
		)
	}
}

export default Main