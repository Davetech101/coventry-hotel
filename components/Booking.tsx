import React from "react";
import SBooking from "../styles/styled-components/SBooking";

const Booking = () => {
  const onsubmit = (e:any) => {
    e.target.preventDefault()
    console.log("");
    
  }
  return (
    <SBooking>
      <form onSubmit={onsubmit}>
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
    </SBooking>
  );
};

export default Booking;
