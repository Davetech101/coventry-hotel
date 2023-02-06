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
    gap:2rem;
    margin-top:3rem;
  }

  main > div {
    background: #fff;
    padding:4rem 2rem;
    box-shadow:1px 1px 10px rgba(0,0,0,.2);
  } 

  main > div > div {
    width:10rem;
    height:10rem;
  } 
  
  main h4{
    font-size: 1.8rem;
  }

  main small{
    font-size: 1.2rem;
    margin-bottom:1rem;
    display:block;
  }

  main p{
    font-size: 1.2rem;
    line-height:2rem;
  }

  main button{
    font-size: 1.2rem;
    margin:1rem 0;
  }
`;

export default SWwa;
