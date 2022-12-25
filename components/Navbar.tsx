import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
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

        <button>
          {showNav ? (
            <AiOutlineCloseCircle color="#fff" size={30} className="close" onClick={() => setShowNav(false)}/>
          ) : (
            <GiHamburgerMenu color="#fff" size={30} onClick={() => setShowNav(true)}/>
          )}
        </button>
      </div>

      <div
        className={showNav ? "modal show" : "modal"}
        onClick={() => setShowNav(false)}
      ></div>
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

      <p>Once a year go someplace you&apos;ve never been before.</p>
    </SNavbar>
  );
};

export default Navbar;
