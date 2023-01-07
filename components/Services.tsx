import React from "react";
import SServices from "../styles/styled-components/SServices";

import { FaWalking } from "react-icons/fa";
import { RiSuitcase3Fill } from "react-icons/ri";
import {
  GiTreasureMap,
  GiIsland,
  GiAirplaneDeparture,
  GiWorld,
} from "react-icons/gi";

const Services = () => {
  const services = [
    {
      icon: <FaWalking />,
      title: "Trekking",
      txt: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      icon: <GiTreasureMap />,
      title: "The Map",
      txt: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      icon: <RiSuitcase3Fill />,
      title: "Suitcase",
      txt: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      icon: <GiIsland />,
      title: "Island Hoping",
      txt: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      icon: <GiWorld />,
      title: "World Round",
      txt: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      icon: <GiAirplaneDeparture />,
      title: "Travel with Plane",
      txt: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
  ];

  return (
    <SServices>
      <h2>Our Services</h2>

      <main>
        {services.map((service, idx) => (
          <div key={idx}>
            {service.icon}
            <h3>{service.title}</h3>

            <p>{service.txt}</p>
            {/* <button>Learn More</button> */}
          </div>
        ))}
      </main>
    </SServices>
  );
};

export default Services;
