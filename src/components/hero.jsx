import React from "react";
import "../css/main.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";

function Hero() {
    const code = `function loadExperience {\n   const frontend = [HTML, CSS , JavaScript, TypeScript React];\n   const backend = [Java, PostgreSql, nodeJS, Python, MySql, PHP];\n   let otherskills = [];\n   let passion = "A love for tech being knowledgeable in IT";\n   return {\n      developer: "Olando";\n      role: "Full Stack Web Developer"; \n      connect() => 'Let's build something';  \n   }; \n}`;
    const roles = ["Web developer", "Software developer", "Frontend developer", "Backend developer", "Fullstack developer"];

    const [index, setIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prev) => (prev + 1) % roles.length);
        }, 2000);

        return () => clearInterval(intervalId);
    });

    return (
        <div className="hero">
            <section className="headingdiv">
                <div className="welcome">
                    <h1 className="heading">
                        My name is <span>Olando.</span> <br></br>Welcome to my portfolio.
                    </h1>
                    <h2 className="typing-text">
                        I am a <span>{ roles[index]}</span><span className="cursor"></span>
                    </h2>
                </div> 
                <div className="experience-div">
                    <div className="experience">
                        <div className="experience-subdiv">
                        <pre>
                            <code>
                                {code}
                            </code>
                        </pre>
                        </div>
                    </div>   
                </div>
            </section>
           
            <div className="about-me">
                <h3>
                    Get to know me <FontAwesomeIcon icon={faFolderOpen} />
                </h3>
                <p>As a young full stack web developer ready for any and every oppourtunuity that comes my way. I have experience using various coding/programming languages and software such as HTML, CSS, Tailwindcss, Javascript, Typescript, React, Java, PHP, Python, MySql, PostgreSql, Ruby on Rails and Nodejs. I completed a 2 year course at Red River College in 2026. </p>
            </div>
            <div className="iconsdiv">
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/olando-mcdonald-9bb708345/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/Olando07" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.instagram.com/lando_077/?next=%2F" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://discordapp.com/users/1187420875662827590" target="_blank">
                        <FontAwesomeIcon icon={faDiscord} />
                    </a>
                </div>
                <a href="#" className="btn">
                    Hire me
                </a>
            </div>
        </div>
    );
}

export default Hero;
