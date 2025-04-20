import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { AvatarDemo } from "./avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Link, useLocation } from "react-router";
import "../css/nav.css";

function Header() {
    /* dark mode / light mode setup */
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    let modeToolTip = theme === "light" ? "Switch to dark mode" : "Switch to light mode";

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    /* active tab setup */
    const { pathname } = useLocation();

    return (
        <>
            <div className="header">
                <div className="nav-links">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link className={pathname === "/Lando/Home" ? "active" : ""} to="/Lando/Home">
                                    <NavigationMenuLink>Home</NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link className={pathname === "/Lando/About-me" ? "active" : ""} to="/Lando/About-me">
                                    <NavigationMenuLink>About Me</NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link className={pathname === "/Lando/Contact" ? "active" : ""} to="/Lando/Contact">
                                    <NavigationMenuLink>Contact</NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="avatar">
                    <AvatarDemo></AvatarDemo>
                </div>

                <div className="mode">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="outline" size="icon" onClick={toggleTheme}>
                                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{modeToolTip}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
        </>
    );
}

export default Header;
