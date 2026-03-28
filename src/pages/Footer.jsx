import React from "react";
import "../css/nav.css";

function Footer() {
	const links = [
		{ id: "hero", label: "Home" },
		{ id: "projects", label: "Projects" },
		{ id: "contact", label: "Contact" },
	];

	const scrollToSection = (sectionId) => {
		document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			<footer className="footer">
				<div className="nav-links">
					<nav className="nav">
						<ul className="nav-ul flex flex-col w-full space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
							{links.map(({ id, label }) => (
								<li key={id}>
									<button type="button" className="w-full h-full" onClick={() => scrollToSection(id)}>
										{label}
									</button>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</footer>
		</>
	);
}

export default Footer;
