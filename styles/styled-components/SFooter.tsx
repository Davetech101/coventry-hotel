import styled from "styled-components";

const SFooter = styled.footer`
  padding: 4rem 15rem;
  margin:0 auto;
  background:#dfdfdf;

  nav{
    display: flex;
    justify-content: space-between;
    align-items: top;
  }

  ul{
    font-size: 1.6rem;
    color: #1b361b;
  }

  a{
    font-size: 1.4rem;
    color: #9c9c9c;
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
    margin: 1rem;
  }

  .connect svg{
    color: #1b361b;
  }

  // @media only screen and (min-width: 800px) {
  //   .links li {
  //     font-size: 2rem;
  //   }

  //   .connect{
  //     font-size:2.2rem;
  //   }

  //   .connect button{
  //     font-size:3.8rem;
  //     margin:0 1rem;
  //   }
  // }
`;

export default SFooter;
