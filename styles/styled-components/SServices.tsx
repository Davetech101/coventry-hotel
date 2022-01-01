import styled from "styled-components";

const SServices = styled.section`
  padding: 4rem 0 4rem 3rem;
  background: #f8f9fa;

  h2 {
    font-size: 3rem;
    color: #1b361b;
    margin-bottom: 3rem;
    text-transform: uppercase;
  }

  main{
    display:flex;
    overflow-x:scroll;
    box-shadow:2px 2px 10px rgba(0,0,0,.3);
    gap:2rem;
  }

  main div {
    background: #fff;
    padding: 2rem;
    flex-shrink:0;
    width:85%;
  }

  main svg{
    font-size:6rem;
    color:#1b361b;
  }

  main h3{
    font-size:2rem;
    margin:2rem 0 1rem;
    color:#1b361b;
  }

  main p{
    font-size:1.5rem;
    color:rgba(0, 0, 0, 0.7);
  }

  main button{
    font-size:1.2rem;
    margin:1.5rem 0;
    background:#1b361b;
    color:#fff;
    border-radius:2rem;
    padding:1rem 1.5rem;
    transition:all .4s;
  }

  main button:hover {
    background: #125412;
  }

  @media only screen and (min-width: 550px) {
    main div {
      width:50%;
    }
  }

  @media only screen and (min-width: 800px) {
    main div {
      width:40%;
    }
  }

  @media only screen and (min-width: 1000px) {
    main div {
      width:30%;
    }
  }

  @media only screen and (min-width: 1200px) {
    padding: 4rem 0 4rem 15rem;
  }
`;

export default SServices;
