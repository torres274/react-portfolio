import React from "react"

import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Title from "../components/Title"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Experience from "../components/Experience"
import Start from "../components/Start"
import Footer from "../components/Footer"

const Main = () => {
	return (
		<React.Fragment>
			<Navbar />
			<Header />
			<Skills />
			<Projects />
			<Title
				title="Professional Experience"
				subtitle="A snapshot of the roles where I’ve led and contributed to building reliable, secure and scalable systems."
			/>
			<Experience />
			<Start />
			<Footer />
		</React.Fragment>
	)
}

export default Main

