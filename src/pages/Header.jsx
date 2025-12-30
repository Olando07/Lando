import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { AvatarDemo } from "../components/avatar";
import "../css/nav.css";
import { Link } from "react-router-dom";

function Header() {
    const [active, setActive] = useState("false");
    /* dark mode / light mode setup */
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    // let modeToolTip = theme === "light" ? "Switch to dark mode" : "Switch to light mode";

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    /* active tab setup */
    const links = [
        { to: "/Lando/", label: "Home" },
        { to: "/Lando/Projects", label: "Projects" },
        { to: "/Lando/Contact", label: "Contact" },
    ];

    return (
        <>
            <header className="header glass">
                <div className="nav-links">
                    <nav className={!active ? "nav active" : "nav"}>
                        <ul className="nav-ul flex flex-col w-full space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
                            {links.map(({ to, label }) => (
                                <li key={to}>
                                    <Link className="w-full h-full" to={to}>
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className={!active ? "mobile-tab active" : "mobile-tab"}>
                    <div className={!active ? "menu-toggle active" : "menu-toggle"} onClick={() => setActive(!active)}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <div className="avatar">
                        <AvatarDemo></AvatarDemo>
                    </div>
                    <div className="mode">
                        <Button variant="outline" size="icon" onClick={toggleTheme}>
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
