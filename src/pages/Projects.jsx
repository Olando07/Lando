import React, { useState } from "react";
import "../css/nav.css";
import studentGuide from "../images/Student-guide.png";
import studentGuideThumbNail from "../images/Student-guide_resize.png";
import exoticCentral from "../images/Exotic-Central.png";
import exoticCentralThumbNail from "../images/Exotic-Central_resize.png";
import todoList from "../images/ToDo-List.png";
import todoListThumbNail from "../images/ToDo-List_resize.png";
import pokemon from "../images/pokemon.png";
import pokemonThumbNail from "../images/pokemon_resize.png";
import fintech from "../images/fintech-dashboard.png";
import fintechThumbNail from "../images/fintech-dashboard-resize.png";

function Projects() {
	const [selectedImage, setSelectedImage] = useState(null);

	const openLightbox = (imageSrc, imageAlt = "") => {
		setSelectedImage({ src: imageSrc, alt: imageAlt });
	};

	const closeLightbox = () => {
		setSelectedImage(null);
	};

	const handleOverlayClick = (e) => {
		if (e.target === e.currentTarget) {
			closeLightbox();
		}
	};

	const handleKeyDown = (e) => {
		if (e.key === "Escape") {
			closeLightbox();
		}
	};

	const projects = [
		{
			name: "Fintech app",
			pic: fintech,
			thumbnailPic: fintechThumbNail,
			url: "https://olando07.github.io/fintech-app/#/",
			description: "A clean finance dashboard concept focused on account summaries, transaction visibility and data-first UI.",
			stack: "React, JavaScript, CSS",
		},
		{
			name: "Pokemon app",
			pic: pokemon,
			thumbnailPic: pokemonThumbNail,
			url: "https://olando07.github.io/Pokemon_app8/",
			description: "Interactive Pokedex-style application with searchable data, dynamic rendering and responsive layout handling.",
			stack: "React, API Integration, CSS",
		},
		{
			name: "To Do List",
			pic: todoList,
			thumbnailPic: todoListThumbNail,
			url: "https://olando07.github.io/To-do-list/",
			description: "Task management app with practical productivity features and a focused user flow for daily planning.",
			stack: "JavaScript, Local Storage, CSS",
		},
		{
			name: "RRC Student Guide",
			pic: studentGuide,
			thumbnailPic: studentGuideThumbNail,
			url: "https://olando07.github.io/New-Student-Guide/",
			description: "Resource hub designed to help new students navigate school tools, support options and onboarding information.",
			stack: "HTML, CSS, JavaScript",
		},
		{
			name: "Exotic Central",
			pic: exoticCentral,
			thumbnailPic: exoticCentralThumbNail,
			url: "https://olando07.github.io/Olando_McDonald_P4/",
			description: "A high-energy auto showcase layout featuring visual hierarchy, media highlights and branded presentation.",
			stack: "React, CSS, UI Design",
		},
	];

	return (
		<div className="projects" id="projects">
			<div className="headingdiv">
				<h1>My Projects</h1>
			</div>
			<div className="flex justify-center">
				<p>Welcome to my projects page. Here you can view and visit some of the projects that I created.</p>
			</div>
			<div className="project-demo">
				{projects.map((project) => (
					<div className="site-div" key={project.url}>
						<img src={project.thumbnailPic} alt={project.name} onClick={() => openLightbox(project.pic, project.name)} />
						<div className="site-content">
							<h3>{project.name}</h3>
							<p>{project.description}</p>
							<span className="project-stack">{project.stack}</span>
							<a className="site-link" href={project.url} target="_blank" rel="noreferrer">
								View Live Demo
							</a>
						</div>
					</div>
				))}
			</div>

			{selectedImage && (
				<div className="lightbox-overlay" onClick={handleOverlayClick} onKeyDown={handleKeyDown} tabIndex={0}>
					<button onClick={closeLightbox} className="lightbox-close-btn" aria-label="Close lightbox">
						×
					</button>

					<div className="lightbox-image-container">
						<img src={selectedImage.src} alt={selectedImage.alt} className="lightbox-image" />
					</div>
				</div>
			)}
		</div>
	);
}

export default Projects;
