import styled from "styled-components";

const SNavbar = styled.main`
  font-family: "Poppins", sans-serif;

  .logo {
    display: flex;
    align-items: center;
    gap: 1rem;
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
    color: #d2d2d2;;
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
    background: #1b361b;
    position: fixed;
    top: 0;
    left: 0;
    min-height: 40vh;
    width: 75vw;
    max-width: 50rem;
    padding: 4rem 2rem;
    box-shadow: 1px 1px 18px black;
    transition: all 0.5s;
    transform: translate(-30rem);
    opacity: 0;
    visibility: hidden;
    z-index: 10;
  }

  nav.desktop a {
    border: 1px solid transparent;
    border-top-left-radius: 3rem;
    border-bottom-right-radius: 3rem;
  }

  nav.desktop {
    display: none;
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
    padding: 0.5rem;
    font-size: 2rem;
    color: #d2d2d2;;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  nav.desktop a:hover {
    transition: all 0.4s;
  }

  
  @media only screen and (min-width: 900px) {
    .toggle {
      display: none;
    }

    nav.mobile {
      display: none;
    }

    nav.desktop {
      display: block;
    }

    nav.desktop ul {
      display: flex;
      gap:4rem;
    }

    li {
      text-transform: capitalize;
      position: relative;
      transition: 0.5s;
      margin: 0.8em;
    }
  
    li::before,
    li::after {
      content: "";
      position: absolute;
      width: 0.6em;
      height: 0.6em;
      background-color: #d2d2d2;;
      border-radius: 50%;
      transition: 0.5s cubic-bezier(0.5, -0.5, 0.25, 1.5);
      top: calc(50% - 0.6em / 2);
    }
  
    li::before {
      left: 0;
      z-index: -1;
    }
  
    li::after {
      right: 0;
      z-index: -2;
    }
  
    li:hover {
      color: #1b361b;
    }
  
    li:hover::before,
    li:hover::after {
      width: 100%;
      height: 100%;
      border-radius: 0;
      background-color: #d2d2d2;;
    }
  
    li:hover::before {
      top: 0;
    }
  
    li:hover::after {
      right: -0.4em;
      filter: brightness(0.8);
    }
  

    nav a {
      padding:1rem 3rem;
      font-size: 2rem;
      color: #d2d2d2;;
    }

    nav a:hover{
      color:#1b361b;;
    }

    .modal {
      display: none;
    }
  }

  @media only screen and (min-width: 1200px) {
    header {
      padding: 1rem 15rem;
    }
  }
`;

export default SNavbar;
