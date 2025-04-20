import React from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport } from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router";
import "../css/nav.css";

function Footer() {
    /* active tab setup */
    const { pathname } = useLocation();

    return (
        <>
            <div className="footer">
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
            </div>
        </>
    );
}

export default Footer;
