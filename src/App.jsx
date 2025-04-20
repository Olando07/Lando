import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import { Routes, Route } from "react-router";
import AboutMe from "./components/about-me";
import ContactMe from "./components/contact-me";

function App() {
    return (
        <>
            <Header></Header>
            <Routes basename="/Lando">
                <Route path="/Lando/Home" element={<Hero></Hero>}></Route>
                <Route path="/Lando/About-me" element={<AboutMe></AboutMe>}></Route>
                <Route path="/Lando/Contact" element={<ContactMe></ContactMe>}></Route>
            </Routes>
            <Footer></Footer>
        </>
    );
}

export default App;
