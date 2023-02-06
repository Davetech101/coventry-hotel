import styled from "styled-components";

const SWwa = styled.section`
  padding: 5rem 15rem;
  background: #f8f9fa;

  h2 {
    font-size: 3rem;
    color: #1b361b;
  }

  > p{
    font-size: 1.8rem;
    margin:2rem 0;
  }

  main{
    display:flex;
    overflow-x:scroll;
    gap:2rem;
  }

  main > div {
    background: #fff;
    box-shadow:2px 2px 10px rgba(0,0,0,.2);
  }
`;

export default SWwa;
