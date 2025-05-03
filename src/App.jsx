import React, { Suspense } from "react";
import "./css/main.css";
import { Routes, Route } from "react-router";

const Header = React.lazy(() => import("./components/Header.jsx")); 
const Footer = React.lazy(() => import("./components/Footer.jsx"));
const Hero = React.lazy(() => import("./components/Hero.jsx"));
const Projects = React.lazy(() => import("./components/Projects.jsx"));
const ContactMe = React.lazy(() => import("./components/Contact-me.jsx"));

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
