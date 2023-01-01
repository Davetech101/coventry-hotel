import React from "react";
import SFaq from "../styles/styled-components/SFaq";

const Faq = () => {
  return (
    <SFaq>
      <h2>Frequently asked questions</h2>

      <details>
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
      </details>
    </SFaq>
  );
};

export default Faq;
