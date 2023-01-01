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
          <li>
            <Link href="/home">Home</Link>
            <Link href="/home">Practice Area</Link>
            <Link href="/home">Services</Link>
            <Link href="/home">Contact</Link>
          </li>
        </ul>

        <ul>
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
