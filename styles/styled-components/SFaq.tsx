import styled from "styled-components";

const SFaq = styled.section`
  padding: 3rem;
  background: #1b361b;
  color: #f2f2f2e5;
  font-family: 'Poppins', sans-serif;


  h2 {
    font-size: 3rem;
    color: #f2f2f2e5;
    margin-bottom: 3rem;
    text-transform: uppercase;
    text-align:center;
    letter-spacing:1rem;
  }

  > div{
    margin:0 auto;
    max-width:60rem;
  }

  .question{
    font-size: 2rem;
    padding: 1rem;
    border-bottom: 1px solid;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }

  .ans{
    background: #1b361b;
    padding:1rem;
    margin-bottom:1rem;
    font-size: 1.4rem;
    transition:all .5s;
    height:0;
    opacity:0;
    visibility:hidden;
  }

  @media only screen and (min-width: 800px) {
    details{
      font-size:2rem;
    }
  }
`;

export default SFaq;
