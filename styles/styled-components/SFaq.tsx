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
    cursor:pointer;
  }

  .ans{
    background: #1b361b;
    color: #747474;
    padding:1rem;
    margin-bottom:1rem;
    font-size: 1.4rem;
    transition:all .5s;
    height:0;
    opacity:0;
    visibility:hidden;
    border-bottom:1px solid;
  }

  .ans.show{
    height:10rem;
    opacity:1;
    visibility:visible;
  }

  @media only screen and (max-width: 500px) {
    .ans.show{
      height:15rem;
      opacity:1;
      visibility:visible;
    }
  }
`;

export default SFaq;
