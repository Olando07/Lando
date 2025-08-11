import React, { Suspense } from "react";
import "./css/main.css";
import { Routes, Route } from "react-router";
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
				<Suspense fallback={<div className="loading">Loading...</div>}>
					<Routes basename="/Lando">
						<Route path="Lando/" element={<Hero />} />
						<Route path="Lando/Projects" element={<Projects />} />
						<Route path="Lando/Contact" element={<ContactMe />} />
					</Routes>
				</Suspense>
			</div>
			<Footer />
			<div className="color1"></div>
			<div className="color2"></div>
			<div className="color3"></div>
		</>
	);
}

export default App;
