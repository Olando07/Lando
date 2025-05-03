import React from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Link } from "react-router";
import "../css/nav.css";

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
            <div className="footer">
                <div className="nav-links">
                    <NavigationMenu>
                        <NavigationMenuList className="flex flex-col w-full space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
                            {links.map(({ to, label }) => (
                                <NavigationMenuItem key={to}>
                                    <NavigationMenuLink className="w-full">
                                        <Link to={to}>{label}</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </>
    );
}

export default Footer;
