import React from "react";
import SBrusque from "../styles/styled-components/SBrusque";

const Brusque = () => {
  return (
    <SBrusque>
      <div className="top">
        <div className="left">
          <div className="dxtp">
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            &nbsp;
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
          </div>
        </div>

        <div className="bg"></div>

        <div className="right"></div>
      </div>
      <p className="mobile">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts. Separated they live in
        Bookmarksgrove right at the coast of the Semantics, a large language
        ocean.
      </p>
      &nbsp;
      <p className="mobile">
        A small river named Duden flows by their place and supplies it with the
        necessary regelialia. It is a paradisematic country, in which roasted
        parts of sentences fly into your mouth.
      </p>
    </SBrusque>
  );
};

export default Brusque;
