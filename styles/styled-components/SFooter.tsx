import styled from "styled-components";

const SFooter = styled.footer`
  padding: 4rem 2rem;

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
`;

export default SFooter;
