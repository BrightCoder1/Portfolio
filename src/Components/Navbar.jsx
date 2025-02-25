import { useEffect, useRef, useState } from "react";
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { FaBars, FaTimes } from "react-icons/fa";
import gsap from "gsap";

const Navbar = () => {
    const navRef = useRef(null);
    const logoRef = useRef(null);
    const linksRef = useRef([]);
    const menuRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        gsap.fromTo(
            navRef.current,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );

        gsap.fromTo(
            logoRef.current,
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" }
        );

        gsap.fromTo(
            linksRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0.2 }
        );
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        gsap.to(menuRef.current,
            {
                x: menuOpen ? "-100%" : "0%", duration: 0.2
            }
        );
    };

    return (
        <header className="navbar" ref={navRef}>
            <h1 className="logo" ref={logoRef}>
                Port<span id="folio">folio</span>
            </h1>

            <div className="phone-nav" onClick={toggleMenu}>
                {menuOpen ? <FaTimes className="menu-icon" /> : <FaBars className="menu-icon" />}
            </div>

            <ul className={`nav-ul ${menuOpen ? "open" : ""}`} ref={menuRef}>
                <li className="nav-li">
                    <a href="tel:+916398728427" className="nav-tag"><IoCall className="icon-font" /></a>
                </li>
                <li className="nav-li">
                    <a href="https://wa.me/916398728427?text=Hi%20there!"
                        target="_blank"
                        rel="noopener noreferrer" className="nav-tag"><IoLogoWhatsapp className="icon-font" /></a>
                </li>
                <li className="nav-li">
                    <a href="mailto:vs035967@gmail.com?subject=Hello&body=I%20have%20a%20question" className="nav-tag"><SiGmail className="icon-font" /></a>
                </li>
            </ul>
        </header>
    );
};

export default Navbar;
