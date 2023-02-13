import React from "react";
import Link from "next/link";
import SFooter from "../styles/styled-components/SFooter";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <SFooter>
      <nav>
        <ul>
          HOME
          <li>
            <Link href="/">About us</Link>
          </li>
          <li>
            <Link href="">Places</Link>
          </li>
          <li>
            <Link href="">Services</Link>
          </li>
          <li>
            <Link href="">Destination</Link>
          </li>
          <li>
            <Link href="">Terms</Link>
          </li>
          <li>
            <Link href="">Privacy</Link>
          </li>
        </ul>

        <ul>
          PRACTICE AREA
          <li>
            <Link href="/">Travel</Link>
          </li>
          <li>
            <Link href="">Porpular Places</Link>
          </li>
          <li>
            <Link href="">Family Vacation</Link>
          </li>
          <li>
            <Link href="">Tour</Link>
          </li>
          <li>
            <Link href="">Privacy</Link>
          </li>
        </ul>

        <ul className="connect">
          Connect
          <li>
            <button>
              <AiOutlineInstagram />
            </button>
            <button>
              <AiOutlineTwitter />
            </button>
            <button>
              <AiFillFacebook />
            </button>
            <button>
              <AiFillLinkedin />
            </button>
          </li>
        </ul>
      </nav>
    </SFooter>
  );
};

export default Footer;
