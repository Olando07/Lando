import React, { Suspense } from "react";
import "./css/main.css";
import { Routes, Route } from "react-router";

const Header = React.lazy(() => import("./Header.js")); 
const Footer = React.lazy(() => import("./Footer.js"));
const Hero = React.lazy(() => import("./Hero.js"));
const Projects = React.lazy(() => import("./Projects.js"));
const ContactMe = React.lazy(() => import("./Contact-me.js"));

function App() {
    return (
        <>
            <main>
                <Suspense fallback={<div className="loading">Loading...</div>}>
                <Header />
                    <Routes basename="/Lando">
                        <Route path="Lando/" element={<Hero/>} />
                        <Route path="Lando/Projects" element={<Projects />} />
                        <Route path="Lando/Contact" element={<ContactMe />} />
                    </Routes>
                <Footer />
                </Suspense>
            </main>
            <div className="color1"></div>
            <div className="color2"></div>
            <div className="color3"></div>
        </>
    );
}

export default App;
