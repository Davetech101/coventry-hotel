import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineCloseCircle, AiTwotoneHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiHotelLine, RiToolsLine, RiContactsBookFill } from "react-icons/ri"
import { FcAbout } from "react-icons/fc"
import SNavbar from "../styles/styled-components/SNavbar";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const links = ["Home", "Services", "About", "Contact"];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.body.getBoundingClientRect().top <= -100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  return (
    <SNavbar>
      <header className={scrolled ? "navbar scrolled" : "navbar"}>
        <Link href="/" className="logo">
          <div>COVENTRY HOTELL</div>
          <RiHotelLine/>
        </Link>

        <button className="toggle">
          {showNav ? (
            <AiOutlineCloseCircle color="#fff" size={30} onClick={() => setShowNav(false)}/>
          ) : (
            <GiHamburgerMenu color="#fff" size={30} onClick={() => setShowNav(true)}/>
          )}
        </button>

        <nav className="desktop">
        <ul>
          {links.map((link) => {
            return (
              <li key={link}>
                <Link
                  href={link === "Home" ? "/" : `/${link.toLocaleLowerCase()}`}
                  className="nav"
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      </header>

      <div
        className={showNav ? "modal show" : "modal"}
        onClick={() => setShowNav(false)}
      ></div>
      <nav className={showNav ? "show mobile" : "mobile"}>
        <ul>
          {links.map((link) => {
            return (
              <li key={link}>
                <Link
                  href={link === "Home" ? "/" : `/${link.toLocaleLowerCase()}`}
                  className="nav"
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </SNavbar>
  );
};

export default Navbar;
