import React from "react";
import "./css/main.css";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import ContactMe from "./pages/Contact-me";

function App() {
	return (
		<>
			<Header />
			<div className="route-container">
				<Hero />
				<Projects />
				<ContactMe />
			</div>
			<Footer />
			<div className="background-blobs">
				<div className="color1"></div>
				<div className="color2"></div>
				<div className="color3"></div>
				<div className="color4"></div>
				<div className="color5"></div>
			</div>
		</>
	);
}

export default App;
