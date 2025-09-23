import React from "react";
import "../css/nav.css";
import { Link } from "react-router-dom";

function Footer() {
    /* active tab setup */
    // const { pathname } = useLocation();
    const links = [
        { to: "/Lando/", label: "Home" },
        { to: "/Lando/Projects", label: "Projects" },
        { to: "/Lando/Contact", label: "Contact" },
    ];

    return (
        <>
            <footer className="footer">
                <div className="nav-links">
                    <nav className="nav">
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
            </footer>
        </>
    );
}

export default Footer;
