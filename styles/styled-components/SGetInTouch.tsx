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
    max-width:70rem;
  }

  main {
    display: flex;
    align-items: top;
    justify-content: space-between;
    gap: 4rem;
  }

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 3rem 0;
    width: 100%;
    max-width:50rem;
  }

  label {
    font-size: 1.8rem;
    margin: 1rem 0;
  }

  input,
  textarea {
    background: #f3f3f3;
    border-radius: 2rem;
    padding: 1.5rem;
    transition: all 0.1s;
  }

  textarea{
    min-height:30rem;
  }

  input:focus,
  textarea:focus {
    outline: 1px solid black;
    outline-offset: 0.5rem;
  }

  form > button {
    background: #1b361b;
    color: #fff;
    border-radius: 2rem;
    padding: 1.5rem 3rem;
    transition: all 0.4s;
    width: 20rem;
    margin: 3rem auto;
    transition:all .5s;
  }

  form > button:hover{
    width:100%;
  }

  .contact {
    margin-top: 4rem;
  }

  .address,
  .phone {
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }

  address {
    font-size: 2rem;
    margin-top: 0.5rem;
  }

  .follow {
    font-size: 2rem;
    margin: 1rem 0;
  }

  .follow button {
    font-size: 2rem;
    margin: 0 0.5rem;
  }

  .email {
    font-size: 2rem;
  }

  @media only screen and (max-width: 1200px) {
    padding: 8rem 2rem;
  }

  @media only screen and (max-width: 600px) {
    main {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default SGetInTouch;
