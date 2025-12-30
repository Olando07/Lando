import React, { useState } from "react";
import "../css/main.css";
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
		{ name: "RRC Student Guide", pic: studentGuide, thunmbnailpic: studentGuideThumbNail, url: "https://olando07.github.io/New-Student-Guide/" },
		{ name: "Exotic Central", pic: exoticCentral, thunmbnailpic: exoticCentralThumbNail, url: "https://olando07.github.io/Olando_McDonald_P4/" },
		{ name: "To Do List", pic: todoList, thunmbnailpic: todoListThumbNail, url: "https://olando07.github.io/To-do-list/" },
		{ name: "Pokemon app", pic: pokemon, thunmbnailpic: pokemonThumbNail, url: "https://olando07.github.io/Pokemon_app8/" },
		{ name: "Fintech app", pic: fintech, thunmbnailpic: fintechThumbNail, url: "https://olando07.github.io/fintech-app/#/" },
	];

	return (
		<div className="projects">
			<div className="headingdiv">
				<h1>My Projects</h1>
			</div>
			<div className="flex justify-center">
				<p>Welcome to my projects page. Here you can view and visit some of the projects that I created.</p>
			</div>
			<div className="project-demo">
				{projects.map((project) => (
					<div className="site-div">
						<img src={project.thunmbnailpic} alt={project.name} onClick={() => openLightbox(project.pic, project.name)} />
						<a className="site-link" href={project.url} target="_blank">
							Click here to demo the site
						</a>
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
