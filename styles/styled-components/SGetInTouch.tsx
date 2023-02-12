import styled from "styled-components";

const SGetInTouch = styled.section`
  z-index: 2;
  position: relative;
  padding: 8rem 15rem;

  h2 {
    font-size: 3rem;
    color: #1b361b;
    margin-bottom: 3rem;
    padding: 0;
    text-transform: uppercase;
  }

  p {
    font-size: 1.8rem;
    margin: 2rem 0;
  }

  form{
    display:flex;
    justify-content:center;
    flex-direction:column;
    margin:3rem 0;
  }

  label{
    font-size: 1.8rem;
    margin: 1rem 0;
  }

  input, textarea{
    background:#f3f3f3;
    max-width:40rem;
    border-radius:2rem;
    padding:1.5rem;
    transition:all .1s;
  }

  input:focus, textarea:focus{
    outline:1px solid black;
    outline-offset:.5rem;
  }
`;

export default SGetInTouch;
