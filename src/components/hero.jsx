import React from "react";
import "../css/main.css";

function Hero() {
    return (
        <div className="hero">
            <div>
                <h1 className="heading">
                    Hello there, it's <span>Olando</span>. Welcome to my portfolio site.
                </h1>
                <h3 className="typing-text">
                    I am a <span></span>
                </h3>
            </div>
            <div>
                <div class="social-icons">
                    <a href="#" target="_blank">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/Olando07" target="_blank">
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <a href="#" target="_blank">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#" target="_blank">
                        <i class="fa-brands fa-discord"></i>
                    </a>
                </div>
                <a href="#" class="btn">
                    Hire me
                </a>
            </div>
            <div className="color">
                <div className="color1"></div>
                <div className="color2"></div>
            </div>
        </div>
    );
}

export default Hero;
