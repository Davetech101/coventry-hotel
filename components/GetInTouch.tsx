import React from "react";
import SGetInTouch from "../styles/styled-components/SGetInTouch";

const GetInTouch = () => {
  return (
    <SGetInTouch>
        <h2>Get in touch</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates autem, repellat soluta perferendis cumque omnis maxime eaque. Et vitae ut modi, aliquid laudantium eaque fugit beatae quis excepturi totam ab.</p>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </form>
    </SGetInTouch>
  );
};

export default GetInTouch;
