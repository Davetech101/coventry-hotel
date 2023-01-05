import styled from "styled-components";

const SBooking = styled.section`
  padding:4rem 3rem;
  background:#f2f2f2e5;
  box-shadow: 1px 1px 1px;

  input {
    display: block;
    padding:1rem;
    background:white;
    margin:2rem auto;
    border-radius:2rem;
    width:100%;
    max-width:50rem;
  }

  label{
    margin:1.2rem auto;
    font-size:1.6rem;
    display:block;
    margin-bottom:1.2rem;
    max-width:50rem;
  }

  button{
    display:block;
    margin:0 auto;
    background:#1b361b;
    color:#fff;
    border-radius:2rem;
    padding:1.5rem 3rem;
  }

  @media only screen and (min-width: 1200px) {

  }
`;
export default SBooking;
