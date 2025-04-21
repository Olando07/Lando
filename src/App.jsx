import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import { Routes, Route } from "react-router";
import ContactMe from "./components/contact-me";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";


library.add(fas, faTwitter, faFontAwesome );

function App() {
    return (
        <>
            <main>
                <Header></Header>
                <Routes basename="/Lando">
                    <Route path="Lando/" element={<Hero></Hero>}></Route>
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
