import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Routes, Route } from "react-router";
import ContactMe from "./components/Contact-me";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import Projects from "./components/Projects";


library.add(fas, faTwitter, faFontAwesome );

function App() {
    return (
        <>
            <main>
                <Header></Header>
                <Routes basename="/Lando">
                    <Route path="Lando/" element={<Hero></Hero>}></Route>
                    <Route path="Lando/Projects" element={<Projects></Projects>}></Route>
                    <Route path="Lando/Contact" element={<ContactMe></ContactMe>}></Route>
                </Routes>
                <Footer></Footer>
                <div className="color">
                    <div className="color1"></div>
                    <div className="color2"></div>
                    <div className="color3"></div>
                </div>
            </main>
        </>
    );
}

export default App;
