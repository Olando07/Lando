import React from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
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
                                <NavigationMenuLink>
                                    <Link className={pathname === "/Lando/" ? "active" : ""} to="/Lando/">
                                        Home
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink>
                                    <Link className={pathname === "/Lando/Contact" ? "active" : ""} to="/Lando/Contact">
                                        Contact
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </>
    );
}

export default Footer;
