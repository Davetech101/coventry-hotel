import styled from "styled-components";

const SBlog = styled.section`
  margin: 4rem 0;
  padding: 0 3rem 0 0;

  h2 {
    font-size: 3rem;
    color: #1b361b;
    margin-bottom: 3rem;
    padding: 0;
    text-align: right;
    text-transform: uppercase;
  }

  main {
    display: flex;
    overflow-x: scroll;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    gap: 2rem;
  }

  main > div {
    padding: 1rem;
    flex-shrink: 0;
    width: 85%;
    min-height: 20rem;
  }

  .text {
    background: rgba(00, 00, 00, 0.7);
    padding: 1rem;
    color: #fff;
    font-size: 1.3rem;
  }

  main button {
    color: #fff;
    margin-top: 1rem;
  }

  @media only screen and (min-width: 550px) {
    main > div {
      width: 50%;
    }

    .text {
      font-size: 1.5rem;
    }

    main button {
      color: #fff;
      margin-top: 1rem;
      font-size: 1.5rem;
    }
  }

  @media only screen and (min-width: 800px) {
    main > div {
      width: 40%;
    }
  }
`;
export default SBlog;
