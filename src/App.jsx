import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import { Routes, Route } from "react-router";
import ContactMe from "./components/contact-me";

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
            </main>
        </>
    );
}

export default App;
