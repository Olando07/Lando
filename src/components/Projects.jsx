import React from "react";
import "../css/main.css";

function Projects() {
    const [studentGuide, exoticCentral] = ["src/images/Student-guide.png", "src/images/Exotic-Central.png"];

    return (
        <div className="projects">
            <div className="headingdiv">
                <h1>Projects</h1>
            </div>
            <div>Welcome to my projects page. Here you will be able to see and visit some of the projects that I have worked on.</div>
            <div className="project-demo">
                <div>
                    <img src={studentGuide} alt="RRC Student Guide" />
                    <a className="project-img" href={studentGuide}>
                        Click here to visit the site
                    </a>
                </div>
                <div>
                    <img src={exoticCentral} alt="RRC Student Guide" />
                    <a className="project-img" href={exoticCentral}>
                        Click here to visit the site
                    </a>
                </div>
            </div>
            {/* Put a photo of each project first then add maybe a short description and link or make the pictue the link */}
            {/* add the web dev 1 project 4 */}
            {/* host and add the react movie project */}
            {/* add the comms project but remove the names first */}
        </div>
    );
}

export default Projects;
