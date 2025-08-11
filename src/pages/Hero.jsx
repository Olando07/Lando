import React from "react";
import "../css/main.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import html from '../images/icons8-html-48.png';
import css from '../images/icons8-css-48.png';
import js from '../images/icons8-js-48.png';
import react from '../images/icons8-react-48.png';
import java from '../images/icons8-java-48.png';
import python from '../images/icons8-python-48.png';
import node from '../images/icons8-nodejs-48.png';
import git from '../images/icons8-git-48.png';
import mysql from '../images/icons8-mysql-48.png';
import postgre from '../images/icons8-postgresql-48.png';
import ruby from '../images/icons8-ruby-on-rails-48.png';
import php from '../images/icons8-php-48.png';
import tailwind from '../images/icons8-tailwindcss-48.png';
import ts from "../images/icons8-typescript-48.png";

function Hero() {
    const code = `function loadExperience {\n   const frontend = [HTML, CSS, JavaScript, TypeScript, React];\n   const backend = [Java, PostgreSql, nodeJS, Python, MySql, PHP];\n   let otherskills = [];\n   let passion = "A love for tech and being knowledgeable in it";\n   return {\n      developer: "Olando";\n      role: "Full Stack Web Developer"; \n      connect() => 'Let's build something';  \n   }; \n}`;
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
                        My name is <span>Olando</span>
                    </h1>
                    <h2 className="typing-text">
                        Welcome to my portfolio <br></br> I am a <span>{roles[index]}</span>
                        <span className="cursor"></span>
                    </h2>
                </div>
                <div className="experience-div">
                    <div className="experience">
                        <div className="experience-subdiv">
                            <pre>
                                <code>{code}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            <div className="maindiv">
                <div className="about-me">
                    <h3>
                        Get to know me <FontAwesomeIcon icon={faFolderOpen} />
                    </h3>
                    <p>I am a somewaht generic person as I like a variety of things like cars, food, sports, games, music, and technology. As a young full stack web developer ready for any and every oppourtunuity that comes my way. I have experience using various coding/programming languages and software which makes me a viable candidate in the web development industry. I completed a 2 year course at Red River College in the year 2026. </p>
                </div>
                <div className="languages">
                    <div className="language-header">
                        <p>Below are the various programming languages and software i have experience using.</p>
                    </div>
                    <div className="language-icons">
                        <p>
                            HTML5
                            <img src={html} alt="html" />
                        </p>
                        <p>
                            CSS
                            <img src={css} alt="css" />
                        </p>
                        <p>
                            Javascript
                            <img src={js} alt="javascript" />
                        </p>
                        <p>
                            React
                            <img src={ react} alt="react" />
                        </p>
                        <p>
                            Java
                            <img src={java} alt="java" />
                        </p>
                        <p>
                            Python
                            <img src={python} alt="python" />
                        </p>
                        <p>
                            Nodejs
                            <img src={node} alt="nodejs" />
                        </p>
                        <p>
                            Git
                            <img src={git} alt="git" />
                        </p>
                        <p>
                            MySql
                            <img src={mysql} alt="mysql" />
                        </p>
                        <p>
                            Postgresql
                            <img src={ postgre} alt="postgresql" />
                        </p>
                        <p>
                            Ruby on Rails
                            <img src={ruby} alt="Ruby on Rails" />
                        </p>
                        <p>
                            PHP
                            <img src={php} alt="PHP" />
                        </p>
                        <p>
                            Tailwindcss
                            <img src={tailwind} alt="Tailwindcss" />
                        </p>
                        <p>
                            Typescript
                            <img src={ts} alt="Typescript" />
                        </p>
                    </div>
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
        </div>
    );
}

export default Hero;
