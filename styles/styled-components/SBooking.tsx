import styled from "styled-components";

const SBooking = styled.section`
  padding: 4rem 3rem;
  background: #f2f2f2;
  box-shadow: 1px 1px 1px;

  form{
    z-index:1;
    position:relative;
    padding:1rem;
  }

  input {
    display: block;
    padding: 1rem;
    background: white;
    margin: 2rem auto;
    border-radius: 2rem;
    width: 100%;
    max-width: 50rem;
  }

  label {
    margin: 1.2rem auto;
    font-size: 1.6rem;
    display: block;
    margin-bottom: 1.2rem;
    max-width: 50rem;
  }

  button {
    display: block;
    margin: 0 auto;
    background: #1b361b;
    color: #fff;
    border-radius: 2rem;
    padding: 1.5rem 3rem;
    transition: all 0.4s;
  }

  button:hover {
    background: #125412;
  }

  @media only screen and (min-width: 700px) {
    label {
      font-size: 1.6rem;
    }

    input {
      display: block;
      padding: 1.5rem;
      background: white;
      margin: 2rem auto;
      border-radius: 2rem;
      width: 100%;
      max-width: 50rem;
    }
  }

  @media only screen and (min-width: 1020px) {
    form {
      display: flex;
      justify-content: space-between;
      align-items: end;
      gap:2rem;
      margin-top:-10rem;
      box-shadow:2px 2px 9px rgba(0,0,0,.2);
      background: #f2f2f2;
     padding:1rem 4rem;
    }

    form > div{
      width:100%;
    }

    input {
      display: block;
      padding: 1.5rem;
      background: white;
      margin: 2rem auto;
      border-radius: 2rem;
      max-width: unset;
    }

    button{
      margin:2rem auto;
      width:100%;
    }
  }

  @media only screen and (min-width: 1200px) {
    padding:4rem 15rem;
  }

`;
export default SBooking;
