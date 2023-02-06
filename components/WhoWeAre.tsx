import { profile } from "console";
import React from "react";
import SWwa from "../styles/styled-components/SWwa";

const WhoWeAre = () => {
  const profiles = [
    {
      name: "James Scott",
      position: "CEO, Co-Founder",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum quisquam debitis facere deserunt tempore optio laborum rerum eligendiure hic sint, ullam impedit similique illo nihil, vitae suscipit neque.",
    },
    {
      name: "Hannah White",
      position: "CEO, Co-Founder",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum quisquam debitis facere deserunt tempore optio laborum rerum eligendiure hic sint, ullam impedit similique illo nihil, vitae suscipit neque.",
    },
    {
      name: "Amy Perez",
      position: "CEO, Co-Founder",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum quisquam debitis facere deserunt tempore optio laborum rerum eligendiure hic sint, ullam impedit similique illo nihil, vitae suscipit neque.",
    },
    {
      name: "Brian Nance",
      position: "CEO, Co-Founder",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum quisquam debitis facere deserunt tempore optio laborum rerum eligendiure hic sint, ullam impedit similique illo nihil, vitae suscipit neque.",
    },
    {
      name: "Stephanie Kenney",
      position: "CEO, Co-Founder",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum quisquam debitis facere deserunt tempore optio laborum rerum eligendiure hic sint, ullam impedit similique illo nihil, vitae suscipit neque.",
    },
  ];
  return (
    <SWwa>
      <h2>Who we are</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum velit hic voluptatem neque optio recusandae distinctio ea quidem odio sint delectus laboriosam, excepturi omnis minus necessitatibus? Tempore dolores aut blanditiis?
      </p>

      <main>
          {profiles.map(profile => (
            <div key={profile.name}></div>
          ))}
      </main>
    </SWwa>
  );
};

export default WhoWeAre;
