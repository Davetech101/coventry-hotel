import styled from "styled-components";

const SFooter = styled.footer`
  padding: 4rem 2rem;
  max-width:60rem;
  margin:0 auto;

  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }

  .links li {
    font-size: 1.4rem;
    display: block;
  }

  .links a {
    color: #1b361b;
    border:1px solid transparent;
  }

  .links a:hover {
    border:1px solid #1b361b;
  }

  .connect{
    font-size:1.9rem;
    margin-top:2rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    color: #1b361b;
  }

  .connect button{
    font-size:2.8rem;
    margin:0 1rem;
  }

  .connect svg{
    color: #1b361b;
  }

  @media only screen and (min-width: 800px) {
    .links li {
      font-size: 2rem;
    }

    .connect{
      font-size:2.2rem;
    }

    .connect button{
      font-size:3.8rem;
      margin:0 1rem;
    }
  }
`;

export default SFooter;
