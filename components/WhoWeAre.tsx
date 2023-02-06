import React from "react";
import SWwa from "../styles/styled-components/SWwa";

const WhoWeAre = () => {
  const profiles = [
    {
      img: "../public/assets/james.jpg",
      name: "James Scott",
      position: "CEO, Co-Founder",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum quisquam debitis facere deserunt tempore optio laborum rerum eligendiure hic sint, ullam impedit similique illo nihil, vitae suscipit neque.",
    },
    {
      img: "../public/assets/hannah.jpg",
      name: "Hannah White",
      position: "CEO, Co-Founder",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum quisquam debitis facere deserunt tempore optio laborum rerum eligendiure hic sint, ullam impedit similique illo nihil, vitae suscipit neque.",
    },
    {
      img: "../public/assets/amy.jpg",
      name: "Amy Perez",
      position: "CEO, Co-Founder",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum quisquam debitis facere deserunt tempore optio laborum rerum eligendiure hic sint, ullam impedit similique illo nihil, vitae suscipit neque.",
    },
    {
      img: "../public/assets/brian.jpg",
      name: "Brian Nance",
      position: "CEO, Co-Founder",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum quisquam debitis facere deserunt tempore optio laborum rerum eligendiure hic sint, ullam impedit similique illo nihil, vitae suscipit neque.",
    },
    {
      img: "../public/assets/ahmed.jpg",
      name: "Ahmed Kenney",
      position: "CEO, Co-Founder",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum quisquam debitis facere deserunt tempore optio laborum rerum eligendiure hic sint, ullam impedit similique illo nihil, vitae suscipit neque.",
    },
  ];
  return (
    <SWwa>
      <h2>Who we are</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum velit hic
        voluptatem neque optio recusandae distinctio ea quidem odio sint
        delectus laboriosam, excepturi omnis minus necessitatibus? Tempore
        dolores aut blanditiis?
      </p>

      <main>
        {profiles.map((profile) => (
          <div key={profile.name}>
            <h4>{profile.name}</h4>
            <small>{profile.position}</small>
            <p>{profile.txt}</p>
            <button>Learn More</button>
          </div>
        ))}
      </main>
    </SWwa>
  );
};

export default WhoWeAre;
