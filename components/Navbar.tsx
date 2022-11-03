import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [showDestinations, setShowDestinations] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const links = ["Home", "Destination", "Services", "About", "Contact"];
  const destinations = ["destination 1", "destination 2", "destination 3"];

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
    <main className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="nav-container">
        <Link href="/">
          <div className="logo">HOTELL</div>
        </Link>

        <ul className="ul">
          {links.map((link) => {
            if (link === "Destination") {
              return (
                <div className="destinations" key={link}>
                  <button
                    className="destination"
                    onClick={() => setShowDestinations((prev) => !prev)}
                  >
                    {link}{" "}
                    <RiArrowDropDownLine
                      size={25}
                      className={showDestinations ? "rotate" : ""}
                    />
                  </button>

                  <ul
                    className={
                      showDestinations
                        ? "destinations-ul show"
                        : "destinations-ul"
                    }
                  >
                    {destinations.map((destination) => (
                      <li key={destination}>
                        <button>{destination}</button>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            } else {
              return (
                <li key={link}>
                  <Link
                    href={
                      link === "Home" ? "/" : `/${link.toLocaleLowerCase()}`
                    }
                    className="nav"
                  >
                    {link}
                  </Link>
                </li>
              );
            }
          })}
        </ul>

        <div className="tel">
          <span className="phone">
            <BsFillTelephoneFill />
          </span>

          <span className="no">+123-489-9381</span>
        </div>

        <div className="mobile">
          <button className="open" onClick={() => setShowNav(true)}>
            <GiHamburgerMenu color="#fff" size={30} />
          </button>

          <div
            className={showNav ? "modal show-modal" : "modal"}
            onClick={() => setShowNav(false)}
          ></div>

          <ul className={showNav ? "mobile-ul show-nav" : "mobile-ul"}>
            <button className="close" onClick={() => setShowNav(false)}>
              <GrClose size={30} />
            </button>

            {links.map((link) => {
              if (link === "Destination") {
                return (
                  <div className="destinations" key={link}>
                    <button
                      className="destination"
                      onClick={() => setShowDestinations((prev) => !prev)}
                    >
                      {link}{" "}
                      <RiArrowDropDownLine
                        size={30}
                        className={showDestinations ? "rotate" : ""}
                      />
                    </button>

                    <ul
                      className={
                        showDestinations
                          ? "destinations-ul show"
                          : "destinations-ul"
                      }
                    >
                      {destinations.map((destination) => (
                        <li key={destination}>
                          <button>{destination}</button>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              } else {
                return (
                  <li key={link}>
                    <Link
                      href={
                        link === "Home" ? "/" : `/${link.toLocaleLowerCase()}`
                      }
                      className="nav"
                      onClick={() => setShowNav(false)}
                    >
                      {link}
                    </Link>
                  </li>
                );
              }
            })}

            <Link href="#" className="tel tel-mobile">
              <span className="phone">
                <BsFillTelephoneFill />
              </span>

              <span className="no">+123-489-9381</span>
            </Link>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
