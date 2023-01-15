import React from "react";
import SHero from "../styles/styled-components/SHero";

const Hero = ({
  text,
  type,
  title,
}: {
  text: string;
  type: string;
  title: string;
}) => {
  return (
    <SHero type={type}>
      <main className="main">
        <h2>{title}</h2>
        <p className="txt">
          {text}
        </p>
        {type === "home" ? <button>See video</button> : ""}
      </main>
    </SHero>
  );
};

export default Hero;
