import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { AvatarDemo } from "../components/avatar";
import "../css/nav.css";

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
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

	const scrollToSection = (sectionId) => {
		document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
		setIsMenuOpen(false);
	};

	return (
		<>
			<header className="header glass">
				<div className="nav-links">
					<nav className={isMenuOpen ? "nav active" : "nav"}>
						<ul className="nav-ul flex flex-col w-full space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
							<li>
								<Button type="button" className="w-full h-full" onClick={() => scrollToSection("hero")}>
									Home
								</Button>
							</li>
							<li>
								<Button type="button" className="w-full h-full" onClick={() => scrollToSection("projects")}>
									Projects
								</Button>
							</li>
							<li>
								<Button type="button" className="w-full h-full" onClick={() => scrollToSection("contact")}>
									Contact
								</Button>
							</li>
						</ul>
					</nav>
				</div>
				<div className={isMenuOpen ? "mobile-tab active" : "mobile-tab"}>
					<div className={isMenuOpen ? "menu-toggle active" : "menu-toggle"} onClick={() => setIsMenuOpen((prev) => !prev)}>
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
