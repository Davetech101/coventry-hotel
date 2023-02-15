import React from "react";
import SHero from "../styles/styled-components/SHero";

const Hero = ({
  text,
  type,
  title,
  bgImg,
}: {
  text: string;
  type: string;
  title: string;
  bgImg: string;
}) => {
  return (
    <SHero bgImg={bgImg}>
      <main className="main">
        <h2>{title}</h2>
        <p className="txt">{text}</p>
        {type === "home" ? (
          <button className="button">
          See Video
          <div className="button__horizontal"></div>
          <div className="button__vertical"></div>
        </button>
        
        ) : (
          ""
        )}
      </main>
    </SHero>
  );
};

export default Hero;
