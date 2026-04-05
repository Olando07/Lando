import React from "react";
import "../css/nav.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import html from "../images/icons8-html-48.png";
import css from "../images/icons8-css-48.png";
import js from "../images/icons8-js-48.png";
import react from "../images/icons8-react-48.png";
import java from "../images/icons8-java-48.png";
import python from "../images/icons8-python-48.png";
import node from "../images/icons8-nodejs-48.png";
import git from "../images/icons8-git-48.png";
import mysql from "../images/icons8-mysql-48.png";
import postgre from "../images/icons8-postgresql-48.png";
import ruby from "../images/icons8-ruby-on-rails-48.png";
import php from "../images/icons8-php-48.png";
import tailwind from "../images/icons8-tailwindcss-48.png";
import ts from "../images/icons8-typescript-48.png";

function Hero() {
	const code = `function loadExperience {\n   const frontend = [HTML, CSS, JavaScript, TypeScript, React];\n   const backend = [Java, PostgreSql, nodeJS, Python, MySql, PHP];\n   let otherskills = [];\n   let passion = "A love for tech and being knowledgeable in it";\n   return {\n      developer: "Olando";\n      role: "Full Stack Web Developer"; \n      connect() => 'Let's build something';  \n   }; \n}`;
	const roles = ["Web developer", "Software developer", "Frontend developer", "Backend developer", "Fullstack developer"];
	const skills = [
		{ name: "HTML5", icon: html, type: "Frontend" },
		{ name: "CSS", icon: css, type: "Frontend" },
		{ name: "JavaScript", icon: js, type: "Frontend" },
		{ name: "TypeScript", icon: ts, type: "Frontend" },
		{ name: "React", icon: react, type: "Frontend" },
		{ name: "Tailwind CSS", icon: tailwind, type: "Frontend" },
		{ name: "Node.js", icon: node, type: "Backend" },
		{ name: "Java", icon: java, type: "Backend" },
		{ name: "Python", icon: python, type: "Backend" },
		{ name: "PHP", icon: php, type: "Backend" },
		{ name: "PostgreSQL", icon: postgre, type: "Database" },
		{ name: "MySQL", icon: mysql, type: "Database" },
		{ name: "Git", icon: git, type: "Tooling" },
		{ name: "Ruby on Rails", icon: ruby, type: "Backend" },
	];

	const [index, setIndex] = useState(0);
	useEffect(() => {
		const intervalId = setInterval(() => {
			setIndex((prev) => (prev + 1) % roles.length);
		}, 2000);

		return () => clearInterval(intervalId);
	});

	return (
		<div className="hero" id="hero">
			<section className="headingdiv">
				<div className="welcome">
					<h1 className="heading">
						My name is <span>Olando</span>
					</h1>
					<h2 className="typing-text">
						Welcome to my portfolio <br></br> I am a <span>{roles[index]}</span>
						<span className="cursor"></span>
					</h2>
					<p className="welcome-copy">I build clean, reliable web apps with thoughtful UX and solid backend logic. This portfolio is a snapshot of the products, features and interfaces I have been designing while studying and working on personal projects.</p>
					<p className="welcome-copy second">If you are looking for someone who can turn ideas into polished, production-ready experiences, you are in the right place.</p>
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
					<p>
						I am a passionate full stack web developer with a diverse range of interests including technology, cooking, sports (mostly soccer), gaming, music and cars. Currently, I am pursuing a diploma in web development at Red River College (graduating May 2026). Through this program, I have gained experience using multiple programming languages, frameworks and development software. My technical abilities, love for problem solving, interest in expanding my knowledge and
						collaborative working style make me suited to work well with teams or by myself on various projects. I am actively seeking opportunities to develop and utilize my skills in real world environments and would love to join your team.{" "}
					</p>
				</div>
				<div className="languages">
					<div className="language-header">
						<h3>Technology Stack</h3>
						<p>A snapshot of the languages, frameworks and tools I use to build performant user experiences and scalable full stack applications.</p>
					</div>
					<div className="language-icons">
						{skills.map((skill) => (
							<div className="skill-card" key={skill.name}>
								<img src={skill.icon} alt={skill.name} />
								<div className="skill-card-text">
									<strong>{skill.name}</strong>
									<span>{skill.type}</span>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="iconsdiv">
					<div className="social-icons">
						<a href="https://www.linkedin.com/in/olando-mcdonald-9bb708345/" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
						<a href="https://github.com/Olando07" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faGithub} />
						</a>
						<a href="https://www.instagram.com/lando_077/?next=%2F" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faInstagram} />
						</a>
						<a href="https://discordapp.com/users/1187420875662827590" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faDiscord} />
						</a>
					</div>
					<button type="button" className="btn" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
						Hire me
					</button>
				</div>
			</div>
		</div>
	);
}

export default Hero;
