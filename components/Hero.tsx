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
    <SHero>
      <main className="main">
        <p className="txt">
          Once a year go someplace you&apos;ve never been before.
        </p>
        <button>See video</button>
      </main>
    </SHero>
  );
};

export default Hero;
