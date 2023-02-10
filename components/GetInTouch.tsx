import React from "react";
import SGetInTouch from "../styles/styled-components/SGetInTouch";

const GetInTouch = () => {
  return (
    <SGetInTouch>
      <form>
        <div className="">
          <label htmlFor="arrival">Arrival Date</label>
          <input type="date" name="" id="arrival" required />
        </div>
        <div className="">
          <label htmlFor="depature">Depature Date</label>
          <input type="date" name="" id="depature" required />
        </div>
        <div className="">
          <label htmlFor="people">Number of Persons</label>
          <input type="number" id="people" min="1" max="5" required />
        </div>
        <div className="">
        <button>Book Now</button>
        </div>
      </form>
    </SGetInTouch>
  );
};

export default GetInTouch;
