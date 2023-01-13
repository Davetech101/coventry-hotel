import styled from "styled-components";


const SHero = styled.section`
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

  main h2 {
    color: #d2d2d2;
    text-align: center;
    font-size: 4rem;
  }

  main p {
    color: #9c9c9c;
    text-align: center;
    font-size: 2rem;
  }
  
  main button {
    background: #1b361b;
    color: #fff;
    border-radius: 2rem;
    padding: 1.5rem 3rem;
    margin-top: 2.5rem;
    transition: all 0.4s;
  }

  main button:hover {
    background: #125412;
  }

  @media only screen and (min-width: 800px) {
    main{
      align-items: unset;
    }

    main h2 {
      color: #d2d2d2;
      text-align: left;
      font-size: 4.5rem;
    }

    main p {
      color: #9c9c9c;
      text-align: left;
      font-size: 2.3rem;
      margin-top:2rem;
    }
  }
  

  @media only screen and (min-width: 1200px) {
    padding: 1rem 13rem;

    main {
      height: 100%;
      max-width: 60rem;
      margin: 0rem auto;
      align-items: unset;
      display: block;
      margin-top: 23rem;
    }

    main h2 {
      color: #d2d2d2;
      text-align: unset;
      width: 100%;
      font-size: 6rem;
    }
  }
`

export default SHero;