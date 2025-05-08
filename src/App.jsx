import React, { Suspense } from "react";
import "./css/main.css";
import { Routes, Route } from "react-router";
import Header from "./components/Header.jsx"; 
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import ContactMe from "./components/Contact-me.jsx";

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
