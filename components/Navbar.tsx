import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import SNavbar from "../styles/styled-components/SNavbar";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const links = ["Home", "Services", "About", "Contact"];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.body.getBoundingClientRect().top <= -200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  return (
    <SNavbar className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="head">
        <Link href="/">
          <div className="logo">COVENTRY HOTELL</div>
        </Link>

        <button className="hamburger" onClick={() => setShowNav(true)}>
          {showNav ? <GrClose color="#fff" size={30} className="close"/> : <GiHamburgerMenu color="#fff" size={30} />}
        </button>
      </div>

      <div className={showNav ? "modal show" : "modal"} onClick={() => setShowNav(false)}></div>
      <nav className={showNav ? "show" : ""}>
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
