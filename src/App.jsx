import React, { Suspense } from "react";
import "./css/main.css";
import { Routes, Route } from "react-router";

const Header = React.lazy(() => import("./components/Header")); 
const Footer = React.lazy(() => import("./components/Footer"));
const Hero = React.lazy(() => import("./components/Hero"));
const Projects = React.lazy(() => import("./components/Projects"));
const ContactMe = React.lazy(() => import("./components/Contact-me"));

function App() {
    return (
        <>
            <main>
                <Header />
                <Suspense
                    fallback={
                        <div className="loading">
                            Loading...
                        </div>
                    }
                >
                    <Routes basename="/Lando">
                        <Route path="Lando/" element={<Hero />} />
                        <Route path="Lando/Projects" element={<Projects />} />
                        <Route path="Lando/Contact" element={<ContactMe />} />
                    </Routes>
                </Suspense>
                <Footer />
                {/* <div className="color"> */}
                    <div className="color1"></div>
                    <div className="color2"></div>
                    <div className="color3"></div>
                {/* </div> */}
            </main>
        </>
    );
}

export default App;
