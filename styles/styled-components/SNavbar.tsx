import styled from "styled-components";

const SNavbar = styled.main`
  background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.6), 
      rgba(0, 0, 0, 0.6)
    ),
    url(/assets/Hero.jpg);
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
  min-height: 90vh;
  position: relative;

  .logo{
    display:flex;
    align-items:center;
    gap:1rem;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
  }

  .scrolled {
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.6);
    background: rgba(0, 0, 0, 0.3);
  }

  header a {
    color: #fff;
    font-size: 2rem;
    font-family: "Poppins", sans-serif;
  }

  .toggle {
    z-index: 10;
    position: relative;
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s;
  }

  .modal.show {
    opacity: 1;
    visibility: visible;
    z-index: 3;
  }

  nav.mobile {
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    height: 40vh;
    width: 75vw;
    max-width: 50rem;
    padding: 2rem;
    box-shadow: 1px 1px 18px black;
    transition: all 0.5s;
    transform: translate(-30rem);
    opacity: 0;
    visibility: hidden;
    z-index: 10;
  }

  nav.desktop{
    display:none;
  }

  nav.show {
    transform: translate(0);
    opacity: 1;
    visibility: visible;
  }

  nav li {
    margin: 2rem 0;
  }

  nav a {
    padding: 1rem;
    font-size: 2rem;
    color: #1b361b;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    max-width: 49rem;
    margin: 0rem auto;
    position: absolute;
    padding: 2rem;
    z-index: 0;
  }

  main p {
    color: #d2d2d2;
    text-align: center;
    font-size: 4rem;
  }

  main button {
    background: #1b361b;
    color: #fff;
    border-radius: 2rem;
    padding: 1.5rem 3rem;
    margin-top: 2.5rem;
  }

  @media only screen and (min-width: 900px) {
    .toggle {
      display: none;
    }

    nav.mobile{
      display:none;
    }

    nav.desktop{
      display:block;
    }

    nav.desktop ul{
      display:flex;
    }

    nav a {
      padding: 1rem;
      font-size: 2rem;
      color: #fff;
    }

    .modal{
      display:none;
    }
  }
`;

export default SNavbar;
