import React from "react";
import SGetInTouch from "../styles/styled-components/SGetInTouch";
import {
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiFillFacebook,
    AiFillLinkedin,
  } from "react-icons/ai";

const GetInTouch = () => {
  return (
    <SGetInTouch>
      <h2>Get in touch</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
        autem, repellat soluta perferendis cumque omnis maxime eaque. Et vitae
        ut modi, aliquid laudantium eaque fugit beatae quis excepturi totam ab.
      </p>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message"></textarea>
        <button>Send</button>
      </form>

      <div className="contact">
        <div className="address">
          Address
          <address>43 Raymouth Rd. Baltemoer, London 3910</address>
        </div>

        <div className="phone">
          Phone
          <address>+1 939 3839 399</address>
          <address>+1 574 2081 687</address>
        </div>

        <div className="follow">Follow
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
            </button></div>

        <div className="email">info@coventryhotel.com</div>
      </div>
    </SGetInTouch>
  );
};

export default GetInTouch;
