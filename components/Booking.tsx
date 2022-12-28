import React from "react";
import SBooking from "../styles/styled-components/SBooking"

const Booking = () => {
  return (
    <SBooking>
      <form>
        <label htmlFor="arrival">Arrival Date</label>
        <input type="date" name="" id="arrival" required/>
        <label htmlFor="depature">Depature Date</label>
        <input type="date" name="" id="depature" required/>
        <label htmlFor="people">Number of Persons</label>
        <input type="number" id="people" min="1" max="5" required/>
        <button>Book Now</button>
      </form>
    </SBooking>
  );
};

export default Booking;
