import React from "react";
import "../css/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Hero() {
    return (
        <div className="hero">
            <div className="headingdiv">
                <h1 className="heading">
                    Hello there, it's <span>Olando</span>. Welcome to my portfolio site.
                </h1>
                <h3 className="typing-text">
                    I am a <span></span>
                </h3>
            </div>
            <div className="about-me">
                <h3>
                    Get to know me <FontAwesomeIcon icon="fa-solid fa-folder-open" />
                </h3>
                <p>As a young full stack web developer ready for any and every oppourtunuity that comes my way. I have experience using various coding/programming languages and software such as HTML, CSS, Tailwindcss, Javascript, Typescript, React, Java, PHP, Python, MySql, PostgreSql, Ruby on Rails and Nodejs. I completed a 2 year course at Red River College in 2026. </p>
            </div>
            <div className="iconsdiv">
                <div className="social-icons">
                    <a href="#" target="_blank">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/Olando07" target="_blank">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="#" target="_blank">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#" target="_blank">
                        <i className="fa-brands fa-discord"></i>
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
