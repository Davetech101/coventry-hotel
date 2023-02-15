import React from "react";
import SFaq from "../styles/styled-components/SFaq";

const Faq = () => {
  const faq = [
    {
      q: "Is it free?",
      a: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eos debitis dignissimos provident nulla vero quae nesciunt cum autem quam?",
    },
    {
      q: "Where can I get help?",
      a: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eos debitis dignissimos provident nulla vero quae nesciunt cum autem quam?",
    },
    {
      q: "How to install this template?",
      a: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eos debitis dignissimos provident nulla vero quae nesciunt cum autem quam?",
    },
  ];
  return (
    <SFaq>
      <h2>Frequently asked questions</h2>

      {faq.map((q) => (
        <div className="" key={q.q}>
          <div className="question">{q.q}</div>

          <div className="ans">{q.a}</div>
        </div>
      ))}

      {/* <details>
        <summary>Is it free?</summary>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eos
        debitis dignissimos provident nulla vero quae nesciunt cum autem quam?
      </details>

      <details>
        <summary>How to install this template?</summary>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eos
        debitis dignissimos provident nulla vero quae nesciunt cum autem quam?
      </details>

      <details>
        <summary>Where can I get help?</summary>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eos
        debitis dignissimos provident nulla vero quae nesciunt cum autem quam?
      </details> */}
    </SFaq>
  );
};

export default Faq;
