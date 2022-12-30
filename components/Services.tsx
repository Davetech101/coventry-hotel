import React from "react";
import SServices from "../styles/styled-components/SServices";

import { FaWalking } from "react-icons/fa";

const Services = () => {
  const arr: { name: string; age: number }[] = [
    { name: "Alice", age: 27 },
    { name: "Bob", age: 28 },
    { name: "Carl", age: 29 },
  ];
  const services: { title: string; txt: string; icon: string }[] = [
    {
      icon: "FaWalking",
      title: "Trekking",
      txt: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      icon: "",
      title: "The Map",
      txt: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      icon: "",
      title: "Suitcase",
      txt: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      icon: "",
      title: "Island Hoping",
      txt: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      icon: "",
      title: "World Round",
      txt: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      icon: "",
      title: "Travel with Plane",
      txt: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
  ];
  const wk = "FaWalking";

  return (
    <SServices>
      <h2>Our Services</h2>

      <main>{services.map((service, idx) => (
        <div key={idx}>
            
        </div>
      ))}</main>
    </SServices>
  );
};

export default Services;
