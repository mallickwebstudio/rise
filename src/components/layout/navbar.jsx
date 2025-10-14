"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";

const navItems = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Services", href: "#" },
];

const subNavItems = [
    { label: "Pricing", href: "#" },
    { label: "Features", href: "#" },
    { label: "Testimonials", href: "#" },
];

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <header className="w-full border-b bg-background text-foreground">
            <div className="mx-auto container p-4 md:px-16 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="#"
                    className="h-8 w-fit flex items-center justify-center gap-2 justify-self-start"
                    aria-label="Go to homepage"
                    title="Homepage"
                >
                    {/* <Image
                        className="h-full w-fit object-contain select-none pointer-events-none"
                        width={32}
                        height={32}
                        src="/logo.svg"
                        alt="Site Logo"
                    /> */}
                    <span className="-mb-2 font-vogue text-4xl">RISE</span>
                </Link>

                {/* Desktop Navigation */}
                {/* <div className="hidden lg:flex gap-3">
                    <nav className="flex gap-2 justify-self-center" role="navigation" aria-label="Primary Navigation">
                        <NavLists onClick={() => setIsMobileMenuOpen(false)} />
                    </nav>

                    <div className="flex items-center gap-2 justify-self-end">
                        <Link
                            className={cn(buttonVariants({ variant: "outline" }), "cursor-pointer")}
                            href="#"
                            aria-label="Log in to your account"
                            title="Log in"
                        >
                            Log in
                        </Link>
                        <Link
                            className={cn(buttonVariants(), "cursor-pointer")}
                            href="#"
                            aria-label="Sign up for an account"
                            title="Sign up"
                        >
                            Sign up
                        </Link>
                    </div>
                </div> */}

                {/* Mobile Menu Toggle */}
                {/* <button
                    onClick={toggleMobileMenu}
                    className="lg:hidden justify-self-end"
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                    <span className="sr-only">Toggle Menu</span>
                </button> */}
            </div>

            {/* Mobile Menu */}
            {/* {isMobileMenuOpen && (
                <nav className="lg:hidden p-4 border-t space-y-2" role="navigation" aria-label="Mobile Navigation">
                    <NavLists onClick={() => setIsMobileMenuOpen(false)} />

                    <div className="mt-4 flex flex-col gap-2">
                        <Link
                            className={buttonVariants({ variant: "outline" })}
                            href="#"
                            aria-label="Log in"
                            title="Log in"
                        >
                            Log in
                        </Link>
                        <Link
                            className={buttonVariants()}
                            href="#"
                            aria-label="Sign up"
                            title="Sign up"
                        >
                            Sign up
                        </Link>
                    </div>
                </nav>
            )} */}
        </header>
    );
}

function NavLists({ onClick }) {
    return (
        <>
            {navItems.map((item) => (
                <Link
                    className={cn(buttonVariants({ variant: "ghost" }), "block w-fit")}
                    href={item.href}
                    key={item.label + "NavbarThree"}
                    onClick={onClick}
                    title={item.label}
                >
                    {item.label}
                </Link>
            ))}

            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger
                            className="dark:hover:bg-accent/50"
                            aria-expanded="false"
                            aria-label="More options"
                        >
                            More
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[200px] gap-3" role="menu">
                                {subNavItems.map((item) => (
                                    <li key={item.label + "NavbarThree"} role="none">
                                        <NavigationMenuLink asChild>
                                            <Link
                                                href={item.href}
                                                className="flex-row items-center gap-2"
                                                role="menuitem"
                                                title={item.label}
                                            >
                                                {item.label}
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </>
    )
}