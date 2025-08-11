import React, { useState } from "react";
import "../css/main.css";
import studentGuide from "../images/Student-guide.png";
import studentGuideThumbNail from "../images/Student-guide_resize.png";
import exoticCentral from "../images/Exotic-Central.png";
import exoticCentralThumbNail from "../images/Exotic-Central_resize.png";
import todoList from "../images/ToDo-List.png";
import todoListThumbNail from "../images/ToDo-List_resize.png";


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
				<h1>Projects</h1>
			</div>
			<div>Welcome to my projects page. Here you will be able to see and visit some of the projects that I have worked on.</div>
			<div className="project-demo">
				<div className="site-div">
					<img src={studentGuideThumbNail} alt="RRC Student Guide" onClick={() => openLightbox(studentGuide, "RRC Student Guide")} />
					<a className="site-link" href="https://olando07.github.io/New-Student-Guide/" target="_blank">
						Click here to visit the site →
					</a>
				</div>
				<div className="site-div">
					<img src={exoticCentralThumbNail} alt="Exotic Central" onClick={() => openLightbox(exoticCentral, "Exotic Central")} />
					<a className="site-link" href="https://olando07.github.io/Olando_McDonald_P4/" target="_blank">
						Click here to visit the site →
					</a>
				</div>
				<div className="site-div">
					<img src={todoListThumbNail} alt="To Do List" onClick={() => openLightbox(todoList, "To Do List")} />
					<a className="site-link" href="https://olando07.github.io/To-do-list/" target="_blank">
						Click here to visit the site →
					</a>
				</div>
			</div>
			{/* Put a photo of each project first then add maybe a short description and link or make the pictue the link */}
			{/* add the web dev 1 project 4 */}
			{/* host and add the react movie project */}
			{/* add the comms project but remove the names first */}

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
