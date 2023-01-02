import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
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
        <Link href="/">
          <div className="logo">COVENTRY HOTELL</div>
        </Link>

        <button className="toggle">
          {showNav ? (
            <AiOutlineCloseCircle color="#fff" size={30} onClick={() => setShowNav(false)}/>
          ) : (
            <GiHamburgerMenu color="#fff" size={30} onClick={() => setShowNav(true)}/>
          )}
        </button>
      </header>

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

      <main className="main">
      <p className="txt">Once a year go someplace you&apos;ve never been before.</p>
      <button>See video</button>
      </main>
    </SNavbar>
  );
};

export default Navbar;
