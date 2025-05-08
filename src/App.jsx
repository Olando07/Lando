import React, { Suspense } from "react";
import "./css/main.css";
import { Routes, Route } from "react-router";
import Header from "./components/Header"; 
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ContactMe from "./components/Contact-me";

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
