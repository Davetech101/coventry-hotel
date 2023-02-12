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

  main{
    display:flex;
    align-items:top;
    justify-content:space-between;
    gap:4rem;
  }

  form{
    display:flex;
    justify-content:center;
    flex-direction:column;
    margin:3rem 0;
    width:100%;
  }

  label{
    font-size: 1.8rem;
    margin: 1rem 0;
  }

  input, textarea{
    background:#f3f3f3;
    border-radius:2rem;
    padding:1.5rem;
    transition:all .1s;
  }

  input:focus, textarea:focus{
    outline:1px solid black;
    outline-offset:.5rem;
  }

  form > button{
    background: #1b361b;
    color: #fff;
    border-radius: 2rem;
    padding: 1.5rem 3rem;
    transition: all 0.4s;
    max-width:40rem;
    margin-top:3rem;
  }

  .contact{
    margin-top:4rem;
  }

  .address, .phone{
    font-size:1.6rem;
    margin-bottom:2rem;
  }

  address{
    font-size:2rem;
    margin-top:.5rem;
  }

  .follow{
    font-size:2rem;
    margin:1rem 0;
  }

  .follow button{
    font-size:2rem;
    margin:0 .5rem;
  }

  .email{
    font-size:2rem;
  }
`;

export default SGetInTouch;
