import React, { useState } from "react";
import SFaq from "../styles/styled-components/SFaq";
import { BsPlusCircle } from "react-icons/bs";
import { AiOutlineMinusCircle } from "react-icons/ai";

const Faq = () => {
  const [activeId, setActiveId] = useState("");
  const faq = [
    {
      id: "1",
      q: "Is it free?",
      a: "  ?",
    },
    {
      id: "2",
      q: "Where can I get help?",
      a: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eos debitis dignissimos provident nulla vero quae nesciunt cum autem quam?",
    },
    {
      id: "3",
      q: "How to install this template?",
      a: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eos debitis dignissimos provident nulla vero quae nesciunt cum autem quam?",
    },
  ];
  return (
    <SFaq>
      <h2>Frequently asked questions</h2>

      {faq.map((q) => (
        <div className="" key={q.id}>
          <div
            className="question"
            onClick={() =>
              activeId === q.id ? setActiveId("") : setActiveId(q.id)
            }
          >
            {q.q}{" "}
            {q.id === activeId ? <AiOutlineMinusCircle /> : <BsPlusCircle />}
          </div>

          <div className={q.id === activeId ? "ans show" : "ans"}>{q.a}</div>
        </div>
      ))}
    </SFaq>
  );
};

export default Faq;
