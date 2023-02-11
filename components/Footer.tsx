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
      {/* <nav>
        <ul className="links">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/home">Practice Area</Link>
          </li>
          <li>
            <Link href="/home">Services</Link>
          </li>
          <li>
            <Link href="/home">Contact</Link>
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
      </nav> */}
    </SFooter>
  );
};

export default Footer;
