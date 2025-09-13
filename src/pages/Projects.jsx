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

	return (
		<div className="projects">
			<div className="headingdiv">
				<h1>My Projects</h1>
			</div>
			<div className="flex justify-center">
				<p>Welcome to my projects page. Here you can view and visit some of the projects that I created.</p>
			</div>
			<div className="project-demo">
				<div className="site-div">
					<img src={studentGuideThumbNail} alt="RRC Student Guide" onClick={() => openLightbox(studentGuide, "RRC Student Guide")} />
					<a className="site-link" href="https://olando07.github.io/New-Student-Guide/" target="_blank">
						Click here to demo the site
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ml-1">
							<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
						</svg>
					</a>
				</div>
				<div className="site-div">
					<img src={exoticCentralThumbNail} alt="RRC Student Guide" onClick={() => openLightbox(exoticCentral, "Exotic Central")} />
					<a className="site-link" href="https://olando07.github.io/Olando_McDonald_P4/" target="_blank">
						Click here to demo the site
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ml-1">
							<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
						</svg>
					</a>
				</div>
				<div className="site-div">
					<img src={todoListThumbNail} alt="To Do List" onClick={() => openLightbox(todoList, "To Do List")} />
					<a className="site-link" href="https://olando07.github.io/To-do-list/" target="_blank">
						Click here to demo the site
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ml-1">
							<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
						</svg>
					</a>
				</div>
				<div className="site-div">
					<img src={pokemonThumbNail} alt="Pokemon app" onClick={() => openLightbox(pokemon, "Pokemon")} />
					<a className="site-link" href="https://olando07.github.io/Pokemon_app8/" target="_blank">
						Click here to demo the site
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ml-1">
							<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
						</svg>
					</a>
				</div>
				{/* host and add the react movie project */}
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
