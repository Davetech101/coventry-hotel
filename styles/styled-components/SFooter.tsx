import styled from "styled-components";

const SFooter = styled.footer`
  padding: 4rem 15rem;
  margin:0 auto;
  background:#dfdfdf;

  nav{
    display: flex;
    justify-content: space-between;
    align-items: top;
    flex-wrap:wrap;
    gap:4rem;
  }

  ul{
    font-size: 1.6rem;
    color: #747474;
  }

  a{
    font-size: 1.4rem;
    color: #1b361b;
  }

  a:hover{
    color: #1b361b;
    border:1px solid transparent;
  }

  .links a:hover {
    border:1px solid #1b361b;
  }

  .connect{
    font-size:1.9rem;
    display:flex;
    justify-content: center;
    color: #1b361b;
    flex-direction:column;
  }

  .connect button{
    font-size:2.8rem;
    margin-right: 1rem;
    margin-top:1rem;
  }

  .connect svg{
    color: #1b361b;
  }

  .connect svg:hover{
    color: #747474;
  }

  @media only screen and (max-width: 1200px) {
    padding: 2rem;
  }
`;

export default SFooter;
